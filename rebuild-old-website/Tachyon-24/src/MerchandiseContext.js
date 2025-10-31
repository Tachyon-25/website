// MerchandiseContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const MerchandiseContext = createContext();

// Custom hook for easier access to the context
export const useMerchandise = () => useContext(MerchandiseContext);

// Provider component
export const MerchandiseProvider = ({ children }) => {
    const product = {
        name: "Transform Yourself!",
        price: 450,
        images: [
            "./assests/Front.png",
            "./assests/Back.png",
            "./assests/Merchandise For Website.png",
        ],
    };

    const [selectedSize, setSelectedSize] = useState("");
    const [userInfo, setUserInfo] = useState({ name: "", email: "", contact: "", location: "" });

    const updateSize = (size) => setSelectedSize(size);
    const updateUserInfo = (info) => setUserInfo((prev) => ({ ...prev, ...info }));

    return (
        <MerchandiseContext.Provider value={{ product, selectedSize, updateSize, userInfo, updateUserInfo }}>
            {children}
        </MerchandiseContext.Provider>
    );
};
