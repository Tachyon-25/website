import React, { useEffect } from "react";
import "./sponsorsection.css";

const SponsorsSection = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }

    function addAnimation(scrollers) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <section className="sponsorsection">
      <div className="titlesponsors">Our Sponsors</div>
      {/* <h1 style = {{fontSize : "50px", "marginBottom" : "60px"}}>Comming Soon..</h1>  Remove this and uncomment the below part to see the sponsors page */}
     <div className="sponsors">
     <div className="scroller" data-speed="fast" data-direction = "left">
        <ul className="tag-list scroller__inner">
          <li><img id="unstop" src="/Unstop.png" alt="Unstop"></img></li>
          <li><img id="titan" src="/titan.png" alt="Titan"></img></li>
          <li><img id="fasttrack" src="/Fastrack_logo.png" alt="Fastrack"></img></li>
          <li><img id="megamind" src="/MegaMind.png" alt="Megamind"></img></li>
          <li><img id="kitchen" src="/kitchenlogo.png" alt="Mama's Kitchen"></img></li>
          <li><img id="PCE" src="/PCELogo2.png" alt="PCE"></img></li>
          <li><img id="tealogylogo" src="/tealogy.png" alt="Tealogy"></img></li>
          <li><img id="tealogylogo" src="/aveer.png" alt="Aiveer"></img></li>
          <li><img id="tealogylogo" src="/hitechComputers.jpg" alt="Hitech Computers"></img></li>
          <li><img id="sbilogo" src="/sbi.png" alt="State Bank of India"></img></li>
        </ul>
      </div>

      
      <div className="scroller" data-speed="fast" data-direction = "right">
        <ul className="tag-list scroller__inner">
          <li><img id="someonelogo" src="/someone.png" alt="SOMEONE"></img></li>
          <li><img id="axisbanklogo" src="/axis_bank_logo.png" alt="Axix Bank"></img></li>
          <li><img id="protienlogo" src="/Protien-4Ulogo.png" alt="Protein4U"></img></li>
          <li><img id="Trip247logo" src="/Trip247logo.png" alt="Trip24/7"></img></li>
          <li><img id="gunaagrologo" src="/gunaagro-logo.png" alt="Gunaagro"></img></li>
          <li><img id="shekunjlogo" src="/shekunjlogo.png" alt="Shekunj"></img></li>
          <li><img id="vadapavlogo" src="/vadapavlogo.png" alt="Vadapav"></img></li>
          <li><img id="santushtilogo" src="/santushti.png" alt="Santushti"></img></li>
          <li><img id="hdfc" src="/hdfc.png" alt="HDFC"></img></li>
          <li><img id="tealogylogo" src="/mobilebuddy.jpg" alt="Mr Mobile buddy"></img></li>
        </ul>
      </div>
     
      </div> 
    </section>  
  );
};

export default SponsorsSection;
