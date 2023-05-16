import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import '../style/stars.sass'

import './fullpage.scss'

import Home from '../components/Home'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const FullPageScroll = () => {
    useEffect(() => {
        new fullpage("#fullpage", {
            afterLoad: function(origin, destination, direction) {
                AOS.refresh();
                const section = destination.item;
                const sectionElements = section.querySelectorAll("[data-aos]");
                sectionElements.forEach((el) => el.classList.add("aos-animate"));
              },
          autoScrolling: true,
          navigation: true,
          keyboardScrolling: true,
          ockAnchors:true
          // other fullpage.js options here
        });
      }, []);

      

    
    return(

        <div id="fullpage" className="fullpagecSroll">
            <div className="section active"><Home /></div>

            <div className="section"><About /></div>

            <div className="section"><Portfolio /></div>

            <div className="section"><Contact /></div>
            {/* <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div> */}
        </div>
    )
};

export default FullPageScroll;