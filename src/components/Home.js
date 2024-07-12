// import React, { useEffect } from 'react';
// //import { useNavigate } from 'react-router-dom';
// import { Navbar } from './Navbar';
// import Products from './Products';
// import '../css/Home.css';
// //import { auth } from '../config/config';

// const Home = ({ user }) => {
 

//   return (
//     <div className="wrapper">
//       <Navbar  />
//       <Products />
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Navbar } from './Navbar';
// import '../css/Home.css';

// const Home = ({ user }) => {
//   const location = useLocation();
//   const newProduct = location.state?.newProduct;

//   const [products, setProducts] = useState([
//     {
//       productName: 'Product 1',
//       productPrice: 50,
//       productImg: 'https://via.placeholder.com/150'
//     },
//     {
//       productName: 'Product 2',
//       productPrice: 100,
//       productImg: 'https://via.placeholder.com/150'
//     },
//     {
//       productName: 'Product 2',
//       productPrice: 100,
//       productImg: 'https://via.placeholder.com/150'
//     },
//     {
//       productName: 'Product 3',
//       productPrice: 100,
//       productImg: 'https://via.placeholder.com/150'
//     },
//     {
//       productName: 'Product 4',
//       productPrice: 100,
//       productImg: 'https://via.placeholder.com/150'
//     },
//     {
//       productName: 'Product 5',
//       productPrice: 100,
//       productImg: 'https://via.placeholder.com/150'
//     }
//   ]);

//   useEffect(() => {
//     if (newProduct) {
//       setProducts((prevProducts) => [...prevProducts, newProduct]);
//     }
//   }, [newProduct]);

//   const handleDelete = (index) => {
//     setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="wrapper">
//       <Navbar user={user} />
//       <div className="products-container">
//         {products.map((product, index) => (
//           <div className="new-product" key={index}>
//             <h3 className="product-name">{product.productName}</h3>
//             <p className="product-price">Price: ${product.productPrice}</p>
//             <img className="product-img" src={product.productImg} alt="Product" />
//             <button onClick={() => handleDelete(index)} className="btn btn-danger btn-md">
//               DELETE
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Navbar } from './Navbar';
// import '../css/Home.css';

// const Home = ({ user }) => {
//   const location = useLocation();
//   const newProduct = location.state?.newProduct;

//   const [products, setProducts] = useState(() => {
//     const storedProducts = localStorage.getItem('products');
//     return storedProducts
//       ? JSON.parse(storedProducts)
//       : [
//           {
//             productName: 'Product 1',
//             productPrice: 50,
//             productImg: 'https://via.placeholder.com/150',
//           },
//           {
//             productName: 'Product 2',
//             productPrice: 100,
//             productImg: 'https://via.placeholder.com/150',
//           },
//         ];
//   });

//   useEffect(() => {
//     if (newProduct) {
//       setProducts((prevProducts) => {
//         const updatedProducts = [...prevProducts, newProduct];
//         localStorage.setItem('products', JSON.stringify(updatedProducts));
//         return updatedProducts;
//       });
//     }
//   }, [newProduct]);

//   const handleDelete = (index) => {
//     const updatedProducts = products.filter((_, i) => i !== index);
//     setProducts(updatedProducts);
//     localStorage.setItem('products', JSON.stringify(updatedProducts));
//   };

//   return (
//     <div className="wrapper">
//       <Navbar user={user} />
//       <div className="products-container">
//         {products.map((product, index) => (
//           <div className="new-product" key={index}>
//             <h3 className="product-name">{product.productName}</h3>
//             <p className="product-price">Price: ${product.productPrice}</p>
//             <img className="product-img" src={product.productImg} alt="Product" />
//             <button onClick={() => handleDelete(index)} className="btn btn-danger btn-md">
//               DELETE
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="products-container">
        <Products />
      </div>
    </div>
  );
};

export default Home;
