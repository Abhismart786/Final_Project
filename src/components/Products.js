
import React, { useEffect, useState, useContext } from "react";
import Product from "./Product";
import { CartContext } from "./CartContext";

const Products = () => {
    const [gotData, setGotData] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        API_CALL();
    }, []);

    async function API_CALL() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                console.log("Error");
            }
            const data = await response.json();
            setGotData(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        gotData === null ? (
            <div>Loading data....</div>
        ) : (
            <div style={{
                display: "flex",
                flexFlow: "row",
                flexWrap: "wrap",
                gap: "10px",
                overflow: "auto"
            }}>
                {gotData.map((item, key) => (
                    <Product item={item} key={key} onAddToCart={addToCart} />
                ))}
            </div>
        )
    );
}

export default Products;
