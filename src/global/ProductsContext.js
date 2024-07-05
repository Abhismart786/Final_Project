// src/global/ProductsContext.js
import React, { createContext, useState, useEffect } from "react";
import { db } from "../config/config"; // Adjust the import path if needed
import { collection, getDocs } from "firebase/firestore";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const productsData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    ProductID: doc.id,
                }));
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};
