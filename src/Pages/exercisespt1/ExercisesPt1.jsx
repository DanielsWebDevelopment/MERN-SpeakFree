import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import "./exercisespt1.css";
import { Link } from "react-router-dom";
import { TbArrowsLeft } from "react-icons/tb";
import blobs2 from '../../assets/purpleblob.json'
import Lottie from 'lottie-react'
import gsap from 'gsap';


function ExercisesPt1() {

  useEffect(() => {
    gsap.from(".ex-card", { duration: 0.7, x: "-100%", ease: "power2.in" });
    gsap.from(".ex-card1", { duration: 0.4, x: "-100%", ease: "power2.in" });
    gsap.from(".ex-card2", { duration: 0.2, x: "-100%", ease: "power2.in" });
    gsap.from(".ex-card3", { duration: 0.7, x:"-350%", ease: "power2.in", delay: 0.5 });
    gsap.from(".ex-card4", { duration: 0.2, x:"-350%", ease: "power2.in", delay: 0.8 });
  })

  return (
    <>
      <Navbar />
      <section className="exercise__container">
        <div className="main-exercise-title">
          <h1><span>Speech </span><br></br>Improvement</h1>
          <div className="exercise-line"></div>
        </div>
        <div className="blobs3" style={{ width: "350px"}}>
            <Lottie animationData={blobs2} className='blob4'/>
        </div>
          <div className="exercise__main">
            <div id="exercise-card" className="ex-card">
              <div className="exercise-title">
                <h3>Breath Control 
                  <br></br>for Smooth Speech</h3>
              </div>
              <div className="instructions-title">
                <h5>Instructions:</h5>
              </div>
              <div id="exercise-info">
                <p>Find a quiet space and sit or 
                <br></br>stand comfortably. Take a deep breath in 
                <br></br>through your nose, letting your abdomen 
                <br></br>expand. As you exhale, prolong the 
                <br></br>sound of "sssss" smoothly. Focus on 
                <br></br>controlling your breath and 
                <br></br>maintaining a steady airflow. 
                <br></br>Repeat 10 times.
                </p>
              </div>
            </div>
            <div id="exercise-card" className="ex-card1">
              <div className="exercise-title">
              <h3>Easy Onset Practice</h3>
              </div>
              <div className="instructions-title">
                <h5>Instructions:</h5>
              </div>
              <div id="exercise-info">
                <p>Choose a simple word like "hello." 
                <br></br>Gently start the word with a soft, 
                <br></br>slow sound e.g., "h-h-hello" and 
                <br></br>gradually transition into the full 
                <br></br>word. Practice this technique with 
                <br></br>various words, aiming for smooth 
                <br></br>and easy transitions. Repeat for 
                <br></br>5 minutes.
                </p>
              </div>
            </div>
            <div id="exercise-card" className="ex-card2">
              <div className="exercise-title">
                <h3>Slowed Speech Pattern</h3>
              </div>
              <div className="instructions-title">
                <h5>Instructions:</h5>
              </div>
              <div id="exercise-info">
                <p>Read a short paragraph or passage 
                <br></br>aloud at a slower pace than usual. Pay 
                <br></br>attention to each word, 
                <br></br>giving yourself time to articulate 
                <br></br>clearly. Focus on rhythm and pacing rather 
                <br></br>than speed. Gradually 
                <br></br>increase table.</p>
              </div>
            </div>
            <div id="exercise-card" className="ex-card3">
              <div className="exercise-title">
                <h3>Mirror Conversations</h3>
              </div>
              <div className="instructions-title">
                <h5>Instructions:</h5>
              </div>
              <div id="exercise-info">
              <p>Stand in front of a mirror and have 
              <br></br>a conversation with your 
              <br></br>reflection. Speak slowly and 
              <br></br>deliberately while maintaining 
              <br></br>eye contact with yourself. 
              <br></br>Practice speaking confidently, 
              <br></br>using pauses and controlled breaths. 
              <br></br>This exercise helps build 
              <br></br>self-assurance in your speech.</p>
              </div>
            </div>
            <div id="exercise-card" className="ex-card4">
              <div className="exercise-title">
                <h3>Tongue Twisters 
                  <br></br>for Articulation</h3>
              </div>
              <div className="instructions-title">
                <h5>Instructions:</h5>
              </div>
              <div id="exercise-info">
                <p>Choose a few tongue twisters and pract-
                <br></br>ice saying them slowly and precisely. 
                <br></br>Gradually increase your speed while 
                <br></br>maintaining clarity. This exercise - 
                <br></br>enhances your articulation and - 
                <br></br>coordination of speech sounds.</p>
              </div>
            </div>
          </div>
      </section>
      <section>
      <Link to="/communicationexercises#title" className="communicate">
        <small className="CE">Communication Exercises</small>
      </Link>
      <div className="prev-btn">
        <Link to="/exercises" className="previous-home">
          <TbArrowsLeft />
        </Link>
      </div>
      </section>
      <Footer />
    </>
  );
}

export default ExercisesPt1;
