import React from 'react';
import { Link } from 'react-router-dom';
import './TeamPage.css';

const TeamPage = () => {
  return (
    <div className="team-page">
      <nav className="page-nav">
        <Link to="/" className="back-button">
          <span className="back-arrow">←</span>
          Back to Home
        </Link>
        <h1 className="nav-title">Tech Fest 2024</h1>
      </nav>

      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title">Our Team</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="coming-soon-container">
            <div className="coming-soon-card">
              <div className="pulse-circle"></div>
              <h3 className="coming-soon-text">Coming Soon</h3>
              <p className="coming-soon-subtext">
                We're assembling an amazing team of tech enthusiasts.
                <br />Stay tuned for updates!
              </p>
              <div className="decorative-line"></div>
              <div className="tech-icons">
                <span className="tech-dot"></span>
                <span className="tech-dot"></span>
                <span className="tech-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;