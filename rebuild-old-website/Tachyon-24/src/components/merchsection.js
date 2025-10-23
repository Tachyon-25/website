import React, { useState } from "react";
import "./merchsection.css";
import FrontImage from '../assests/Front.png';
import BackImage from '../assests/Back.png';
import { Link } from "react-router-dom";

const MerchSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isBackVisible, setIsBackVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsBackVisible(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsBackVisible(false);
    };

    return (
        <section className="MerchSection">
            <div className="Merchtitle">Merchandise</div>
            <div
                className="MerchPromo"
            >
                <div className="MerchImageFront" style={{ display: isHovered ? 'none' : 'flex' }}

                    onMouseEnter={handleMouseEnter}

                >
                    <img id="MerchImageFront" src={FrontImage} alt="Front view" />
                </div>
                <div className="MerchImageBack" style={{ display: isBackVisible ? 'flex' : 'none' }}
                    onMouseLeave={handleMouseLeave}
                >
                    <img id="MerchImageBack" src={BackImage} alt="Back view" />
                </div>
                <div className="buynowbtn">
                    <Link to="/merchandise"><button id="buynowbtn">Buy Now</button></Link>
                </div>
            </div>
        </section>
    );
};

export default MerchSection;
