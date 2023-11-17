import React, { useEffect, useRef } from "react";
// CSS IMport
import "./header.css";
import gsap from 'gsap';
// image imports
import Img2 from "../../assets/mainimg2.png";
import mainImg2 from "../../assets/mainimg1.png";
import animationBlobs from '../../assets/animationblob2.json.json'
import Lottie from 'lottie-react'

const Header = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 0,
      duration: 2, // Adjust the duration as needed
    });
  }, []);

  return (
    <header>
      {/* ================ main header container */}
      <div className="header-container" ref={elementRef}>
        <div className="main-content">
        <div className="animationblobs" style={{ width: "330px"}}>
          <Lottie animationData={animationBlobs} className='animationblob'/>
        </div>
          <h1>
            Embrace your <br></br>
            new way of <br></br>communication.
          </h1>
          <small>Learn to overcome any obstable.</small>
        </div>
        {/* ===============================main header image */}
        <div className="main-img1">
          <img src={mainImg2} className="mainimg2" alt="main" />
          <img src={Img2} className="mainimg1" alt="main" />
        </div>
        {/* ===============================main header image */}
      </div>
    </header>
  );
};

export default Header;
