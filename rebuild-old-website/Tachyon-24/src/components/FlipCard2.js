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
          imgSrc: "/transformersImages/devlopment.png",
          logoSrc: "dev.png",
          title: "CSI DEVELOPMENT",
          club: "CSI-Development",
        },
        {
          imgSrc: "/transformersImages/BITWISE.png",
          logoSrc: "bitwise.png",
          title: "CSI BITWISE",
          club: "CSI-Bitwise",
        },
        {
          imgSrc: "/transformersImages/BOTNET.png",
          logoSrc: "botnet.png",
          title: "CSI BOTNET",
          club: "CSI-Botnet",
        },
        {
          imgSrc: "/transformersImages/vrarmr.png",
          logoSrc: "arvrmr.png",
          title: "VR AR MR",
          club: "VR+AR+MR",
        },
        {
          imgSrc: "/transformersImages/moz.png",
          logoSrc: "MOZILLA.png",
          title: "MOZILLA",
          club: "Mozilla",
        },
        {
          imgSrc: "/transformersImages/rospinot.png",
          logoSrc: "rospinot.png",
          title: "ROSPINOT",
          club: "Rospinot",
        },
        // { imgSrc: "/transformersImages/multimedia.png", logoSrc: "jdsc.png", title: "JDSC", club: "JDSC" },
        {
          imgSrc: "/transformersImages/multimedia.png",
          logoSrc: "MMUIUX-BLACK.png",
          title: "CSI MULTIMEDIA",
          club: "CSI-MM%26UI%2FUX",
        },
        { imgSrc: "/transformersImages/GFG.png", logoSrc: "gg.png", title: "GFG", club: "GFG" },
        {
          imgSrc: "/transformersImages/devlopment.png",
          logoSrc: "dev.png",
          title: "CSI DEVELOPMENT",
          club: "CSI-Development",
        },
        {
          imgSrc: "/transformersImages/BITWISE.png",
          logoSrc: "bitwise.png",
          title: "CSI BITWISE",
          club: "CSI-Bitwise",
        },
        {
          imgSrc: "/transformersImages/BOTNET.png",
          logoSrc: "botnet.png",
          title: "CSI BOTNET",
          club: "CSI-Botnet",
        },
        {
          imgSrc: "/transformersImages/vrarmr.png",
          logoSrc: "arvrmr.png",
          title: "VR AR MR",
          club: "VR+AR+MR",
        },
        {
          imgSrc: "/transformersImages/moz.png",
          logoSrc: "MOZILLA.png",
          title: "MOZILLA",
          club: "Mozilla",
        },
        {
          imgSrc: "/transformersImages/rospinot.png",
          logoSrc: "rospinot.png",
          title: "ROSPINOT",
          club: "Rospinot",
        },
        // { imgSrc: "/transformersImages/multimedia.png", logoSrc: "jdsc.png", title: "JDSC", club: "JDSC" },
        {
          imgSrc: "/transformersImages/multimedia.png",
          logoSrc: "MMUIUX-BLACK.png",
          title: "CSI MULTIMEDIA",
          club: "CSI-MM%26UI%2FUX",
        },
        { imgSrc: "/transformersImages/GFG.png", logoSrc: "gg.png", title: "GFG", club: "GFG" },
        {
          imgSrc: "/transformersImages/devlopment.png",
          logoSrc: "dev.png",
          title: "CSI DEVELOPMENT",
          club: "CSI-Development",
        },
        {
          imgSrc: "/transformersImages/BITWISE.png",
          logoSrc: "bitwise.png",
          title: "CSI BITWISE",
          club: "CSI-Bitwise",
        },
        {
          imgSrc: "/transformersImages/BOTNET.png",
          logoSrc: "botnet.png",
          title: "CSI BOTNET",
          club: "CSI-Botnet",
        },
        {
          imgSrc: "/transformersImages/vrarmr.png",
          logoSrc: "arvrmr.png",
          title: "VR AR MR",
          club: "VR+AR+MR",
        },
        {
          imgSrc: "/transformersImages/moz.png",
          logoSrc: "MOZILLA.png",
          title: "MOZILLA",
          club: "Mozilla",
        },
        {
          imgSrc: "/transformersImages/rospinot.png",
          logoSrc: "rospinot.png",
          title: "ROSPINOT",
          club: "Rospinot",
        },
        {
          imgSrc: "/transformersImages/multimedia.png",
          logoSrc: "MMUIUX-BLACK.png",
          title: "CSI MULTIMEDIA",
          club: "CSI-MM%26UI%2FUX",
        },
        { imgSrc: "/transformersImages/GFG.png", logoSrc: "gg.png", title: "GFG", club: "GFG" },
      ],
    },
    {
      name: "CIVIL",
      content: [{ imgSrc: "/transformersImages/civilo.png", logoSrc: "/Civil.png", title: "CE" }],
    },
    {
      name: "CHEMICAL",
      content: [
        { imgSrc: "/transformersImages/che.png", logoSrc: "CHEMICAL LOGO.png", title: "CHE" },
      ],
    },
    {
      name: "MECHANICAL",
      content: [{ imgSrc: "/transformersImages/mec.png", logoSrc: "mes.png", title: "MES" }],
    },
    {
      name: "ELECTRONICS",
      content: [{ imgSrc: "/transformersImages/isf.png", logoSrc: "Isf.png", title: "ISF" }],
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
