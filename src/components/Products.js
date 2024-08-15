import React, { useEffect, useState, useContext } from "react";
import Product from "./Product";
import { CartContext } from "./CartContext";

// Define the Products component
const Products = () => {
    // State to store the fetched product data
    const [gotData, setGotData] = useState(null);
    // Get the addToCart function from the CartContext
    const { addToCart } = useContext(CartContext);

    // useEffect to call the API 
    useEffect(() => {
        API_CALL();
    }, []);

    // Function to fetch data from the API
    async function API_CALL() {
        try {
            // Fetch data from the API
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                console.log("Error");
            }
            // Parse the JSON data from the response
            const data = await response.json();
            // Update the state with the fetched data
            setGotData(data);
        } catch (err) {
            // Log any errors that occur during the fetch
            console.log(err.message);
        }
    }

    return (
        // Check if data is null, and display a loading message if true
        gotData === null ? (
            <div>Loading data....</div>
        ) : (
            // Display the product data in a flex container
            <div style={{
                display: "flex",
                flexFlow: "row",
                flexWrap: "wrap",
                gap: "10px",
                overflow: "auto"
            }}>
                {/* Map through the fetched data and render a Product component for each item */}
                {gotData.map((item, key) => (
                    <Product item={item} key={key} onAddToCart={addToCart} />
                ))}
            </div>
        )
    );
}

// Export the Products component for use in other parts of the application
export default Products;

