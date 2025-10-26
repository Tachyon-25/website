import React, { useEffect } from 'react';
// import { Link } from 'lucide-react';
import './Footer.css';
import footerLogo from '../assests/tachyon_25.png'

const Footer = () => {
    useEffect(() => {
        // Create and animate transformer gears
        const createGear = () => {
            const gear = document.createElement('div');
            const gearTypes = ['gear-small', 'gear-medium', 'gear-large'];
            gear.className = `transformer-gear ${gearTypes[Math.floor(Math.random() * gearTypes.length)]}`;
            
            // Random position
            gear.style.left = Math.random() * 100 + 'vw';
            gear.style.top = Math.random() * 100 + 'vh';
            
            // Random rotation direction
            gear.style.animationDirection = Math.random() > 0.5 ? 'normal' : 'reverse';
            
            document.querySelector('.footer_section').appendChild(gear);
            
            // Remove gear after animation
            setTimeout(() => {
                gear.remove();
            }, 3000);
        };

        // Create gears periodically
        const intervalId = setInterval(createGear, 500);

        return () => clearInterval(intervalId);
    }, []);

    const SparkSVG = ({ scale = 1 }) => (
        <svg width={91 * scale} height={121 * scale} viewBox="0 0 91 121" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="46" cy="60" r="19" stroke="url(#paint0_linear_37_95)" strokeWidth="2"/>
            <g filter="url(#filter0_f_37_95)">
                <circle cx="46" cy="60" r="11" fill="white"/>
            </g>
            <line x1="45.5" y1="0.5" x2="45.5" y2="40.5" stroke="url(#paint1_linear_37_95)" strokeLinecap="round"/>
            <line x1="0.5" y1="-0.5" x2="40.5" y2="-0.5" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 45 121)" stroke="url(#paint2_linear_37_95)" strokeLinecap="round"/>
            <line x1="90.5" y1="60.5" x2="65.5" y2="60.5" stroke="url(#paint3_linear_37_95)" strokeLinecap="round"/>
            <line x1="0.5" y1="-0.5" x2="25.5" y2="-0.5" transform="matrix(1 0 0 -1 0 60)" stroke="url(#paint4_linear_37_95)" strokeLinecap="round"/>
            <defs>
                <filter id="filter0_f_37_95" x="27" y="41" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_37_95"/>
                </filter>
                <linearGradient id="paint0_linear_37_95" x1="20.5" y1="2.5" x2="69" y2="102.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.75"/>
                </linearGradient>
                <linearGradient id="paint1_linear_37_95" x1="44" y1="41" x2="44" y2="3.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint2_linear_37_95" x1="41" y1="0.999997" x2="3.5" y2="0.999999" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint3_linear_37_95" x1="65" y1="59" x2="88.7805" y2="59" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint4_linear_37_95" x1="26" y1="0.999997" x2="2.21951" y2="0.999998" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    );

    return (
        <div className="footer_section">
            
            <div className="container">
                <div className="wrap_footer">
                    <div className="divider_footer"></div>
                    <a href="/" className="link-logo-footer">
                        <img 
                            src={footerLogo}
                            alt="Tachyon Logo" 
                            className="logo_footer"
                        />
                    </a>
                    <div className="paragraph_1 paragraph_1_align_center paragraph_1_margin_bottom_80px">
                        <span className="text-dim">ALL CREDITS TO</span>{' '}
                        <a 
                            href="/team" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="link_paragraph_1"
                        >
                            tachyon team
                        </a>{' '}
                        {/* <span className="text-dim">THE WRITER AND</span><br />
                        <span className="text-dim">ILLUSTRATOR OF DEMON SLAYER: KIMETSU NO YAIBA - MANGA</span> */}
                    </div>
                    <div className="paragraph_1 paragraph_1_align_center paragraph_1_medium">
                        <span className="text-dim">WEBSITE DEVELOPED AND DESIGNED BY</span>{' '}
                        <span className="link_paragraph_1">
                            Tachyon Development Team
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="spark">
                <SparkSVG scale={1} />
            </div>
            <div className="spark-1">
                <SparkSVG scale={0.85} />
            </div>
            <div className="spark-2">
                <SparkSVG scale={0.7} />
            </div>
            <div className="spark-4">
                <SparkSVG scale={0.75} />
            </div>
        </div>
    );
}

export default Footer;