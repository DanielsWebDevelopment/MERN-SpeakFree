import React, { useEffect } from 'react'
// CSS IMport
import './maininfo2.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// ====================== Image IMports
import Img6 from '../../assets/img6.jpg'


gsap.registerPlugin(ScrollTrigger);

const MainInfo2 = () => {

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.animate-on-scroll',
        start: 'top center',
        end: 'top center',
        markers: false,
      },
    });

  // Add animations to the timeline
  tl.from('.animate-on-scroll', {
    opacity: 0,
    y: 100,
    duration: 1,
  });
}, []);

  return (
    // ============ fade-in animation. 
    <section>
      <div className="info2">
         {/* ========================= Why choose us Image */}
        <div className="info-image1">
          <img src={Img6} alt='learning' />
        </div>
        {/* ========================= End Why choose us Image */}

         {/* ==========================Why Choose us Info */}
        <div className="self__paced-info1">
          <h3 className="animate-on-scroll">Why Choose Us!</h3>
          <p className="animate-on-scroll">At SpeakFree, we understand the profound impact 
            <br></br>that effective communication can have on one's life. 
            <br></br>Our expertly designed program offers a personalized 
            <br></br> approach to tackling stuttering 
            <br></br>and enhancing communication skills.</p>
        </div>
        {/* ========================== End Self paced Info */}
      </div>
    </section>
  )
}

export default MainInfo2