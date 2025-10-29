import React from "react";
// import { Link } from 'react-router-dom';
import "./AboutPage.css";
import Footer from "../components/Footer";
import groupImg from "../assests/last-techfest-group.jpeg";
import ImageSlider from "./AboutPagecomponents/ImageSlider";
import SmallSparksBackground from "../components/SmallSparksBackground";


const AboutPage = () => {
  const transformerBg = "../public/transformersImages/Gemini_Generated_Image_v2ey78v2ey78v2ey.png"; // Update exact path
  const slides = [
    { url: "/image1.jpeg", title: "last-techfest-1" },
    { url: "/image2.jpeg", title: "last-techfest-2" },
    { url: "/image3.jpeg", title: "last-techfest-3" },
  ];

  // // State to toggle Read More for each section
  // const [readMoreState, setReadMoreState] = useState({
  //   detailsBox1: false,
  //   detailsBox2: false,
  //   detailsBox3: false
  // });

  // // Function to toggle Read More for a specific section
  // const toggleReadMore = (section) => {
  //   setReadMoreState((prevState) => ({
  //     ...prevState,
  //     [section]: !prevState[section]
  //   }));
  // };

  return (
    <>
      <SmallSparksBackground />
      <section className="aboutpage" style={{'--transformer-bg': `url(${transformerBg})`}}>
        <div className="content-about"> 
        <div className="details-box-1">
          
          <div className="details-box-1-txt">
            <span >
              About Tachyon 
              {/* <img src={logo} alt="logo"></img> */}
            </span>
            <p>
              Tachyon is Central India's Largest Technical Fest. It is an
              endeavor to provide an outstanding platform for students to
              showcase their talent and skill sets in the fiercest of
              competitions. <br></br>
              <br></br>
              To bring out the best of the youth is what we aim for, and an
              extremely overwhelming and vivacious display of know-how is what
              we get. The huge rewards and recognition are just another feather
              in our cap, displaying the heights we have scaled over the years.
              {/* <span className="dots">{readMoreState.detailsBox1 ? '' : '...'}</span>
              <span className="more-text" style={{ display: readMoreState.detailsBox1 ? 'inline' : 'none' }}>
                {' '}The festival will feature hands-on workshops, exhibitions, and talks by industry leaders, focusing on innovations in AI, sustainable tech, and more. Whether you're a student, innovator, or enthusiast, join us to push boundaries, connect with others, and shape the future together!
              </span> */}
            </p>
            {/* <button onClick={() => toggleReadMore("detailsBox1")} id="read-more-btn">
              {readMoreState.detailsBox1 ? "Read Less" : "Read More"}
            </button> */}
          </div>
          <div className="details-box-1-img">
            <img
              id="details-box-1-img"
              src={groupImg}
              alt="Group from last techfest"
            />
          </div>
        </div>

        <div className="details-box-2">
          <div className="details-box-2-bubbles">
            <div className="bubbles-top">
              <div className="num-txt">60+</div>
              <div className="type-txt">Events</div>
            </div>
            <div className="bubbles-middle">
              <div className="num-txt">1000+</div>
              <div className="type-txt">Participants</div>
            </div>
            <div className="bubbles-bottom">
              <div className="num-txt">3</div>
              <div className="type-txt">Days</div>
            </div>
          </div>
          <div className="details-box-2-txt">
            <span>Our Major Events</span>
            <p>
              <br></br>
              These events span a wide spectrum of 
              disciplines, from cutting-edge technology to  
              strategic management, ensuring a platform for 
              every passionate mind to shine.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●
              WAR FOR TREZOR<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●
              GLITCH E-SPORTS<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●
              ROBO WARS<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●
              CODE MANIA<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●
              CRYPTIC HUNT<br></br>
              {/* <span className="dots">{readMoreState.detailsBox2 ? '' : '...'}</span>
              <span className="more-text" style={{ display: readMoreState.detailsBox2 ? 'inline' : 'none' }}>
                {' '}The festival will feature hands-on workshops, exhibitions, and talks by industry leaders, focusing on innovations in AI, sustainable tech, and more. Whether you're a student, innovator, or enthusiast, join us to push boundaries, connect with others, and shape the future together!
              </span> */}
            </p>
            {/* <button onClick={() => toggleReadMore("detailsBox2")} id="read-more-btn">
              {readMoreState.detailsBox2 ? "Read Less" : "Read More"}
            </button> */}
          </div>
        </div>

        <div className="details-box-3">
          <div className="details-box-3-image-slider">
            <span>Memories</span>
            <div className="containerStyles">
              <ImageSlider slides={slides} />
            </div>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
