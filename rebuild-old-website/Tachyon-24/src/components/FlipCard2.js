import React, { useState, useRef } from "react";
import "./FlipCard.css";

const FlipSlider = () => {
  const [activeTab, setActiveTab] = useState("CSE"); // Default active tab
  const marqueeRef = useRef(null); // Reference for the CSE card container

  const tabs = [
    {
      name: "CSE",
      content: [
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.38 AM.jpeg",
          logoSrc: "dev.png",
          title: "CSI DEVELOPMENT",
          club: "CSI-Development",
        },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.39 AM.jpeg",
          logoSrc: "bitwise.png",
          title: "CSI BITWISE",
          club: "CSI-Bitwise",
        },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.40 AM.jpeg",
          logoSrc: "botnet.png",
          title: "CSI BOTNET",
          club: "CSI-Botnet",
        },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.51 AM.jpeg",
          logoSrc: "arvrmr.png",
          title: "VR AR MR",
          club: "VR+AR+MR",
        },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.53 AM.jpeg",
          logoSrc: "MOZILLA.png",
          title: "MOZILLA",
          club: "Mozilla",
        },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.54 AM.jpeg",
          logoSrc: "rospinot.png",
          title: "ROSPINOT",
          club: "Rospinot",
        },
        { imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.55 AM.jpeg", logoSrc: "jdsc.png", title: "JDSC", club: "JDSC" },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.56 AM.jpeg",
          logoSrc: "MMUIUX-BLACK.png",
          title: "CSI MULTIMEDIA",
          club: "CSI-MM%26UI%2FUX",
        },
        { imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.57 AM.jpeg", logoSrc: "gg.png", title: "GFG", club: "GFG" },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.38 AM.jpeg",
          logoSrc: "dev.png",
          title: "CSI DEVELOPMENT",
          club: "CSI-Development",
        },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.39 AM.jpeg",
          logoSrc: "bitwise.png",
          title: "CSI BITWISE",
          club: "CSI-Bitwise",
        },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.40 AM.jpeg",
          logoSrc: "botnet.png",
          title: "CSI BOTNET",
          club: "CSI-Botnet",
        },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.51 AM.jpeg",
          logoSrc: "arvrmr.png",
          title: "VR AR MR",
          club: "VR+AR+MR",
        },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.53 AM.jpeg",
          logoSrc: "MOZILLA.png",
          title: "MOZILLA",
          club: "Mozilla",
        },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.54 AM.jpeg",
          logoSrc: "rospinot.png",
          title: "ROSPINOT",
          club: "Rospinot",
        },
        { imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.55 AM.jpeg", logoSrc: "jdsc.png", title: "JDSC", club: "JDSC" },
        {
          imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.56 AM.jpeg",
          logoSrc: "MMUIUX-BLACK.png",
          title: "CSI MULTIMEDIA",
          club: "CSI-MM%26UI%2FUX",
        },
        { imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.57 AM.jpeg", logoSrc: "gg.png", title: "GFG", club: "GFG" },
      ],
    },
    {
      name: "CIVIL",
      content: [{ imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.15.59 AM.jpeg", logoSrc: "/Civil.png", title: "CE" }],
    },
    {
      name: "CHEMICAL",
      content: [
        { imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.16.00 AM.jpeg", logoSrc: "CHEMICAL LOGO.png", title: "CHE" },
      ],
    },
    {
      name: "MECHANICAL",
      content: [{ imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.16.02 AM.jpeg", logoSrc: "mes.png", title: "MES" }],
    },
    {
      name: "ELECTRONICS",
      content: [{ imgSrc: "/transformersImages/WhatsApp Image 2025-10-21 at 7.16.03 AM.jpeg", logoSrc: "Isf.png", title: "ISF" }],
    },
  ];

  const handleTabClick = (tabName) => setActiveTab(tabName);

  return (
    <div id="characters-section" className="characters_section">
      <div className="container">
        <div className="wrap_tabs_characters_home">
          <div className="tabs_menu_characters_home" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={`item_tabs_characters_home ${
                  activeTab === tab.name ? "active" : ""
                }`}
                role="tab"
                aria-selected={activeTab === tab.name}
              >
                <div>{tab.name}</div>
              </button>
            ))}
          </div>

          <div className="tabs_content_characters_home">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={`tab-pane ${activeTab === tab.name ? "active" : ""}`}
                role="tabpanel"
              >
                <h2 className="tab-title">{tab.name}</h2>
                <div
                  className={`card-container ${
                    tab.name === "CSE" ? "cse-marquee" : ""
                  }`}
                  ref={tab.name === "CSE" ? marqueeRef : null} // Only assign ref to CSE tab
                >
                  {tab.content.map((character, index) => (
                    <div key={index} className={`card card${index + 1}`}>
                      <a
                        href={`/events?branch=${tab.name}&club=${character.club}`}
                        className="card-link"
                      >
                        <div className="logo-box">
                          <img
                            src={character.logoSrc}
                            alt="Logo"
                            className="logo-image"
                          />
                        </div>
                        <div className="wrap_image_character_tabs">
                          <img
                            alt="character"
                            src={character.imgSrc}
                            className="image_character_tabs"
                          />
                        </div>
                        {character.title && (
                          <h3 className="card-title">{character.title}</h3>
                        )}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipSlider;
