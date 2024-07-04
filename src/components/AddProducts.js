import React, { useState } from 'react';
import { storage, db } from '../config/config';
import {
    ref,
    uploadBytesResumable,
    getDownloadURL 
} from "firebase/storage";

const AddProducts = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState('');
  const [percent, setPercent] = useState(0);

  const types = ['image/png', 'image/jpeg'];

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError('');
    } else {
      setProductImg(null);
      setError('Please select a valid image type png or jpeg');
    }
  };

  const addProducts = async (e) => {
    e.preventDefault();
    if (!productImg) {
      setError('Please select an image to upload');
      return;
    }

    try {
      const storageRef = ref(storage, `product-images/${productImg.name}`);
      const uploadTask = uploadBytesResumable(storageRef, productImg);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setPercent(progress);
        },
        (err) => {
          setError(err.message);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          await db.collection('Products').add({
            ProductName: productName,
            ProductPrice: Number(productPrice),
            ProductImg: url,
          });
          setProductName('');
          setProductPrice(0);
          setProductImg(null);
          setPercent(0);
          setError('');
          document.getElementById('file').value = '';
        }
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <br />
      <h2>ADD PRODUCTS</h2>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={addProducts}>
        <label htmlFor="product-name">Product Name</label>
        <br />
        <input type="text" className="form-control" required
          onChange={(e) => setProductName(e.target.value)} value={productName} />
        <br />
        <label htmlFor="product-price">Product Price</label>
        <br />
        <input type="number" className="form-control" required
          onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
        <br />
        <label htmlFor="product-img">Product Image</label>
        <br />
        <input type="file" className="form-control" onChange={productImgHandler} id='file' />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">ADD</button>
      </form>
      {percent > 0 && <div>Uploading: {percent}%</div>}
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default AddProducts;
