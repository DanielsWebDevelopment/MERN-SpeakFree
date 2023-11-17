import React from "react";
import "./exercises.css";
import Navbar from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import Img2 from "../../assets/img2.jpg";
import Img1 from "../../assets/img1.jpg";
import { Link } from "react-router-dom";
import { TbArrowsLeft } from "react-icons/tb";


function Exercises() {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <div className="exercises__container">
          <div className="exercise__info">
            <h1><span>Exercise</span> your Skills</h1>
            <p>
              Good communication is the art of conveying thoughts, ideas, and
              emotions in a clear and effective manner. It involves not only
              expressing oneself clearly but also actively listening to others
              with empathy and understanding. Through good communication, people
              can establish connections, build trust, and foster positive
              relationships.
            </p>
          </div>
        </div>
        <div className="exercise__cta">
          <div className="exercise__cta-image">
              <img src={Img2} alt="exercises" className="new-cta-image"/>
              <img src={Img1} alt="exercise1" className="new-cta-image" />
          </div>
          <div className="exercise-links">
            <Link to='/stutterexercises' className="exercise-info-link"><u>Speech Exercises</u></Link>
            <Link to='/communicationexercises' className="exercise-info-link"><u>Communication</u></Link>
          </div>
        </div>
        <section>
          <div className="prev-btn">
            <Link to="/communication" className="previous-home">
              <TbArrowsLeft />
            </Link>
          </div>
        </section>
        <Footer></Footer>
      </section>
    </>
  );
}

export default Exercises;
