import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMerchandise } from "../../MerchandiseContext";
import "./payment.css";

function Payment() {
    const navigate = useNavigate();
    const { product, selectedSize, userInfo } = useMerchandise();
    const [, setPaymentSuccess] = useState(false);

    // Function to load the Razorpay script dynamically
    async function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    }

    // Function to display Razorpay and handle payment
    async function displayRazorpay() {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        try {
            const orderData = {
                amount: product.price * 100, // Convert to smallest currency unit (e.g., INR paisa)
                currency: "INR", // You can dynamically set the currency if needed
                receipt: `receipt_${Date.now()}`, // Generate a unique receipt ID
            };

            const result = await axios.post("https://razorpay-gateway-cju7.onrender.com/payment/orders", orderData);

            if (!result) {
                alert("Server error. Are you online?");
                return;
            }

            const { amount, id: order_id, currency } = result.data;

            const options = {
                key: "rzp_live_99JEU41KVf4UDW", // Your Razorpay key here
                amount: amount.toString(),
                currency: currency,
                name: "Tachyon",
                description: `Purchase of ${product.name} (${selectedSize})`,
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                        userInfo,
                        selectedSize,
                    };

                    try {
                        // Send payment details to the backend and database
                        const verificationResponse = await axios.post("https://razorpay-gateway-cju7.onrender.com/send-to-db", data);
                        if (verificationResponse.data.msg === "Payment data saved successfully!") {
                            setPaymentSuccess(true);
                            navigate("/checkout"); // Redirect to Checkout if payment and data saving succeed
                        }
                    } catch (error) {
                        navigate("/checkout");   
                    }
                },

                prefill: {
                    name: userInfo.name,
                    email: userInfo.email,
                    contact: userInfo.contact,
                },
                notes: {
                    address: userInfo.location,
                },
                theme: {
                    color: "#61dafb", // Custom theme color
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            alert("Unable to initiate payment. Please try again.");
        }
    }

    return (
        <div className="payment">
            <h1>Confirm Your Purchase</h1>
            <p>{product.name} - Size: {selectedSize}</p>
            <p>Price: ₹{product.price}</p>
            <button onClick={displayRazorpay}>
                Pay ₹{product.price}
            </button>
        </div>
    );
}

export default Payment;
