import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Hero.css";
import playButton from "../assests/playButton.svg";

Modal.setAppElement("#root");

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [particles, setParticles] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotation = scrollPosition * 0.5;
      document.documentElement.style.setProperty(
        "--rotation-angle",
        `${rotation}deg`
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const generateParticles = () => {
      const particleCount = 20;
      const newParticles = [];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // Percentage within the scrolling text container
          y: Math.random() * 100, // Percentage within the scrolling text container
          size: Math.random() * 40 + 10,
          speed: Math.random() * 2 + 0.5,
          delay: Math.random() * 2,
          className: `particle particle${(i % 6) + 1}`
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-buttons">
            <button
              className="lightbox-trailer"
              onClick={openModal}
              aria-label="open lightbox"
              aria-haspopup="dialog"
            >
              <div className="wrap-play-button position-relative">
                <div className="play-button border-light rounded-circle d-flex justify-content-center align-items-center">
                  <img
                    src={playButton}
                    alt="Play Button"
                    className="icon-play-button"
                  />
                </div>
                <div className="play-text text-light">WATCH PREVIOUS EVENT</div>
              </div>
            </button>
          </div>
          <h1 className="hero-title">Welcome!</h1>
          <p className="hero-subtitle">
            Welcome to the TechFest 2025 - The Tachyon!
          </p>
        </div>
        {/* Transformer energy lines */}
        <div className="energy-lines">
          <div className="energy-line energy-line-1"></div>
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <iframe
            className="video-iframe"
            width="940"
            height="528"
            src="https://www.youtube.com/embed/jkM9uayDQfE?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
        </Modal>
      </section>

      <section className="scrolling-text-container">
        {/* Video Background */}
        <video 
          className="video-background" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/transformersImages/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
        
        <div className="horizontal-line"></div>
        <div className="scrolling-text">
          {Array(8).fill(<div className="scrolling-text-item">Tachyon!</div>)}
        </div>
        <div className="horizontal-line"></div>
        <div className="icon-show">
          <img src="/transformersImages/WhatsApp Image 2025-10-21 at 12.03.43 PM.jpeg" alt="Transformers Icon" className="icon-center" />
        </div>
        <div className="particle-container">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={particle.className}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
                transform: `translateY(${particle.speed * 100}%)`
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;