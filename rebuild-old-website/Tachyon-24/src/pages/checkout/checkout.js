// Checkout.js
import React from "react";
import { useMerchandise } from "./../../MerchandiseContext";
import "./checkout.css"
function Checkout() {
    const { product, selectedSize, userInfo } = useMerchandise();

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <p>Product: {product.name}</p>
            <p>Size: {selectedSize}</p>
            <p>Price: {product.price}</p>
            <h3>User Information</h3>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Contact: {userInfo.contact}</p>
            <p>Location: {userInfo.location}</p>
            {/* Add further checkout functionalities here */}
        </div>
    );
}

export default Checkout;
