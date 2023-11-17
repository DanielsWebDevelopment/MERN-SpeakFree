import React from 'react'
import './smodification.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'

function SModification() {
  const [revealExercise, setRevealExercise] = useState(false);


  return (
    <>
      <div className="awareness__container">
        <div className="blobs" style={{ width: "300px"}}>
          <Lottie animationData={blobs2} className='blob'/>
        </div>
        <div className="dashboard-prev">
          <Link to="/userexercises"><IoIosArrowBack/>Back to dashboard</Link>
        </div>
          <div className="awareness_exercises_card">
            <h1>Speech Modification</h1>
            <p className='awareness_info'>"Stuttering modification is a highly effective approach for individuals 
            seeking to improve their stuttering patterns and enhance their 
            communication skills. This therapeutic technique focuses on 
            changing the way a person stutters rather than attempting to 
            eliminate it entirely. By embracing stuttering and modifying 
            its characteristics, individuals can gain greater control over 
            their speech. Through techniques such as voluntary stuttering, 
            learning to prolong sounds, and using pauses strategically, 
            individuals can reduce the tension and anxiety associated with 
            stuttering. "</p>

            <a href='#breathing_control-excerise' id='get-started' className='getting-started'>Get started Now</a>
          </div>
          <div className="blobs1" style={{ width: "150px"}}>
            <Lottie animationData={blobs2} className='blob'/>
          </div>

          <div className="instructions__image">
            
          </div>
      </div>

      <div id="breathing_control-excerise">
        <div className="breathing-control_card">
          <button onClick={() => setRevealExercise(!revealExercise)} className='control-button'>Instructions</button>
          
          {revealExercise && (
          <p className='breating__exercise'>
            <div id="breating__exercise1"><b>Speech Modification Exercises</b></div>
          <br></br><b>Exercise 1:</b> 
          <br></br><b>Pausing Practice</b>
          <br></br>During conversations, incorporate deliberate pauses 
          <br></br>between sentences or thoughts. Pauses can provide a buffer, 
          <br></br>allowing you to gather your thoughts and speak more fluently. 
          <br></br>Focus on using natural, unhurried pauses.
          <br></br>

          <br></br><b>Slow and Steady Speech</b>
          <br></br><b>Exercise 2: </b> 
          <br></br> Practice speaking slowly and deliberately. Pay attention to your 
          <br></br>breathing and aim for a relaxed, rhythmic speech pattern. Gradually 
          <br></br>increase your speaking rate while maintaining control and fluency. 
          <br></br>

          <br></br><b>Conversational Partner Swap</b> 
          <br></br><b>Exercise 3: </b> 
          <br></br>Practice speaking with different people to simulate various social situations. 
          <br></br>Switch conversation partners regularly to challenge yourself and adapt 
          <br></br>to different communication styles and speeds. 
          <br></br>This exercise can enhance your adaptability and confidence in real-life 
          <br></br> interactions.
          <br></br>

          <br></br><b>Word Substitution Game</b>
          <br></br><b>Exercise 4: </b>  
          <br></br>Play a game with yourself or a friend where you substitute a word you anticipate 
          <br></br>stuttering on with a synonym or a similar word. 
          <br></br>This exercise can help you maintain the flow of your speech and reduce 
          <br></br>the fear of getting stuck on specific words.</p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>" Remember that stuttering modification is a process that varies from person to person. 
            <br></br>It's essential to be patient and persistent while working on these 
            <br></br>exercises and seek support from a qualified speech therapist who can 
            <br></br>provide personalized guidance and feedback tailored to your specific 
            <br></br>needs and goals. "</p>
        </div>
      </div>
    </>
  )
}

export default SModification
