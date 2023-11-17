import React, { useEffect } from 'react'
import './cexercises.css'
import Lottie from 'lottie-react'
import blobs2 from '../../assets/purpleblob.json'
import Navbar from '../../components/navbar/Nav'
import Footer from '../../components/footer/Footer'
import { Link } from "react-router-dom";
import { TbArrowsLeft } from "react-icons/tb";
import gsap from 'gsap';

function CExercises() {

      useEffect(() => {
        gsap.from(".ex-card", { duration: 0.7, x: "-100%", ease: "power2.in" });
        gsap.from(".ex-card1", { duration: 0.4, x: "-100%", ease: "power2.in" });
        gsap.from(".ex-card2", { duration: 0.2, x: "-100%", ease: "power2.in" });
        gsap.from(".ex-card3", { duration: 0.7, x:"-350%", ease: "power2.in", delay: 0.5 });
        gsap.from(".ex-card4", { duration: 0.2, x:"-350%", ease: "power2.in", delay: 0.8 });
      })

  return (
    <section>
        <Navbar></Navbar>
        <div className="communication__container">
            <div className="communications__title" id='communications'>
                <h1>Communication<br></br><span>Exercises</span></h1>
            </div>
            <div className="blobs3" style={{ width: "350px"}}>
                <Lottie animationData={blobs2} className='blob4'/>
            </div>
            <div className="main__communication-exercises">
                <div id="communication-card" className='ex-card'>
                    <div className="communications__card-title">
                        <h3>Active Listening</h3>
                    </div>
                    <div className="communication_instructions-title">
                        <h5>Instructions</h5>
                    </div>
                    <div id='communications__info'>
                        <p>Practice active listening by engaging 
                        <br></br>in a conversation with a friend 
                        <br></br>or family member. Focus on truly 
                        <br></br>understanding their perspective 
                        <br></br>before responding.</p>
                    </div>
                </div>
                <div id="communication-card" className='ex-card1'>
                    <div className="communications__card-title">
                        <h3>Reflective Responses</h3>
                    </div>
                    <div className="communication_instructions-title">
                        <h5>Instructions</h5>
                    </div>
                    <div id='communications__info'>
                        <p>Choose a topic and have a conver-
                        <br></br>sation with yourself. Respond to your 
                        <br></br>own thoughts and statements as if you 
                        <br></br>were talking to a friend, using empathy 
                        <br></br>and understanding.</p>
                    </div>
                </div>
                <div id="communication-card" className='ex-card2'>
                    <div className="communications__card-title">
                        <h3>Non-verbal Awareness</h3>
                    </div>
                    <div className="communication_instructions-title">
                        <h5>Instructions</h5>
                    </div>
                    <div id='communications__info'>
                        <p>Watch a TV show or movie <br></br>on mute. Pay attention to characters' 
                        <br></br>body language, 
                        <br></br>facial expressions, and gestures to 
                        <br></br>deduce their emotions and intentions.</p>
                    </div>
                </div>
                <div id="communication-card" className='ex-card3'>
                    <div className="communications__card-title">
                        <h3>Conflict Resolution 
                        <br></br>Simulation</h3>
                    </div>
                    <div className="communication_instructions-title">
                        <h5>Instructions</h5>
                    </div>
                    <div id='communications__info'>
                        <p>Role-play a conflict situation 
                        <br></br>with a partner. Each takes a turn 
                        <br></br>expressing their viewpoint while 
                        <br></br> the other practices active 
                        <br></br>listening and finding 
                        <br></br>common ground.</p>
                    </div>
                </div>
                <div id="communication-card" className='ex-card4'>
                    <div className="communications__card-title">
                        <h3>Elevator Pitch</h3>
                    </div>
                    <div className="communication_instructions-title">
                        <h5>Instructions</h5>
                    </div>
                    <div id='communications__info'>
                        <p>Imagine you have 60 seconds to 
                        <br></br>introduce yourself and your 
                        <br></br>interests to someone. 
                        <br></br>Write and practice a concise 
                        <br></br>and engaging elevator pitch.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <Link to="/login#title" className="communicate">
            <small className='CE'>Login for more Exercises</small>
        </Link>
        <div className="prev-btn">
            <Link to="/stutterexercises" className="previous-home">
              <TbArrowsLeft />
            </Link>
          </div>
        </div>
        <Footer></Footer>
    </section>
  )
}

export default CExercises
