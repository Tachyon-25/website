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
          <li><img id="unstop" src="/sponsors/1.jpeg" alt="Unstop"></img></li>
          <li><img id="titan" src="/sponsors/3.jpeg" alt="Titan"></img></li>
          <li><img id="fasttrack" src="/sponsors/4.jpeg" alt="Fastrack"></img></li>
          <li><img id="megamind" src="/sponsors/5.jpeg" alt="Megamind"></img></li>
          <li><img id="kitchen" src="/kitchenlogo.png" alt="Mama's Kitchen"></img></li>
          <li><img id="PCE" src="/sponsors/6.jpeg" alt="PCE"></img></li>
          <li><img id="tealogylogo" src="/sponsors/7.jpeg" alt="Tealogy"></img></li>
          
          <li><img id="tealogylogo" src="/hitechComputers.jpg" alt="Hitech Computers"></img></li>
          <li><img id="sbilogo" src="/sponsors/8.jpeg" alt="State Bank of India"></img></li>
        </ul>
      </div>

      
      <div className="scroller" data-speed="fast" data-direction = "right">
        <ul className="tag-list scroller__inner">
         <li><img id="unstop" src="/sponsors/1.jpeg" alt="Unstop"></img></li>
          <li><img id="titan" src="/sponsors/3.jpeg" alt="Titan"></img></li>
          <li><img id="fasttrack" src="/sponsors/4.jpeg" alt="Fastrack"></img></li>
          <li><img id="megamind" src="/sponsors/5.jpeg" alt="Megamind"></img></li>
          <li><img id="kitchen" src="/kitchenlogo.png" alt="Mama's Kitchen"></img></li>
          <li><img id="PCE" src="/sponsors/6.jpeg" alt="PCE"></img></li>
          <li><img id="tealogylogo" src="/sponsors/7.jpeg" alt="Tealogy"></img></li>
          
          <li><img id="tealogylogo" src="/hitechComputers.jpg" alt="Hitech Computers"></img></li>
          <li><img id="sbilogo" src="/sponsors/8.jpeg" alt="State Bank of India"></img></li>
       </ul>
      </div>
     
      </div> 
    </section>  
  );
};

export default SponsorsSection;
