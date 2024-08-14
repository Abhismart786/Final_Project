import React from 'react'; // Import React to use JSX and React components
import './Product.css'; // Import the CSS file for styling the Product component

// Define the Product component which receives 'item' and 'onAddToCart' as props
const Product = ({ item, onAddToCart }) => {
  // Destructure properties from the 'item' object
  const { id, price, image, title } = item;
  const wordLimit = 3; // Set a specific word limit for the title display

  // Function to handle the Add to Cart button click event
  const handleAddToCart = () => {
    // Alert the user that the product has been added to the cart
    alert('Your product '+ title +' is added to your cart');
    // Call the onAddToCart function passed as a prop with the current item
    onAddToCart(item);
  };

  // Truncate the title if it exceeds the word limit
  const truncatedTitle = truncateTitle(title, wordLimit);

  // Render the Product component's UI
  return (
    <div className="product-container"> {/* Container for the product */}
      <img src={image} alt="product" className="product-image" /> {/* Product image */}
      <div className="product-details"> {/* Container for product details */}
        <p className="product-id">ID: {id}</p> {/* Display the product ID */}
        <p className="product-title"> {/* Display the truncated product title */}
          {truncatedTitle}
        </p>
        <p className="product-price">Price: ${price}</p> {/* Display the product price */}
        <button 
          className="product-button" 
          onClick={handleAddToCart} 
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

// Helper function to truncate the title based on the word limit
const truncateTitle = (title, wordLimit) => {
  const words = title.split(' '); // Split the title into an array of words
  if (words.length > wordLimit) { // Check if the number of words exceeds the limit
    return words.slice(0, wordLimit).join(' ') + '...'; // Truncate and add ellipsis
  }
  return title; // Return the original title if within the word limit
};

export default Product; // Export the Product component as the default export
