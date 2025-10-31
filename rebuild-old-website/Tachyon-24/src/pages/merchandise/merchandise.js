import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMerchandise } from "../../MerchandiseContext.js";
import "./merchandise.css";
import FrontImage from '../../assests/Front.png';
import BackImage from '../../assests/Back.png';
import Footer from "../../components/Footer.js";
const images = [FrontImage, BackImage];

function Merchandise() {
    const navigate = useNavigate();
    const { product, selectedSize, updateSize, userInfo, updateUserInfo } = useMerchandise();

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSizeChange = (e) => {
        updateSize(e.target.value);
    };

    const handleInputChange = (e) => {
        updateUserInfo({ [e.target.name]: e.target.value });
    };

    const handleCheckout = () => {
        navigate("/payment");
    };

    // Automatically switch images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <>
            <div className="merchandise">
                <h1 className="metallic-blue">{product.name}</h1>

                <div className="merchimg">
                    <div className="carousel-item">
                        <img className="d-block w-100" src={images[currentIndex]} alt={`Product view ${currentIndex + 1}`} />
                    </div>
                </div>

                <div className="merchandise-form">

                    {/* User Information */}
                    <div className="user-info">
                        <div className="form-group">
                            <h3 className="form-heading">User Information:</h3>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={userInfo.name}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={userInfo.email}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                            <input
                                type="tel"
                                name="contact"
                                placeholder="Contact"
                                value={userInfo.contact}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={userInfo.location}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </div>
                    </div>


                    <div className="user-select-size">
                        {/* Size Selector */}
                        <div className="select-form-group">
                            <h3 className="form-heading">Select Size:</h3>
                            <select
                                value={selectedSize}
                                onChange={handleSizeChange}
                                className="form-select">
                                <option value="">Select size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>

                        {/* Checkout Button */}
                        <button
                            onClick={handleCheckout}
                            disabled={!selectedSize || !userInfo.name || !userInfo.email || !userInfo.contact || !userInfo.location}
                            className="form-button">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Merchandise;
