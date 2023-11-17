import React from 'react'
import './bawareness.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'

function BAwareness() {
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
            <h1>Take control of your breathing</h1>
            <p className='awareness_info'>"Breathing plays a pivotal role in managing stuttering, offering individuals 
            who struggle with this speech disorder a valuable tool for improved 
            communication. When someone stutters, their speech flow is disrupted 
            by involuntary repetitions, prolongations, or blocks. Focusing on 
            controlled, deep breathing can serve as a stabilizing anchor during speech. 
            By taking deliberate, slow breaths, individuals can regulate their 
            airflow and reduce tension in their vocal cords and articulatory muscles. 
            This not only promotes a more relaxed speaking environment but also provides
            a rhythmic cadence to their speech, making it easier to initiate 
            and sustain words and sentences."</p>

            <a href='#breathing_control-excerise' id='get-started'>Get started Now</a>
          </div>
          <div className="blobs1" style={{ width: "150px"}}>
            <Lottie animationData={blobs2} className='blob'/>
          </div>
      </div>

      <div id="breathing_control-excerise">
        <div className="breathing-control_card">
          <button onClick={() => setRevealExercise(!revealExercise)} className='control-button'>Instructions</button>
          
          {revealExercise && (
          <p className='breating__exercise'>
            <div id="breating__exercise1"><b>Breathe and Speak:</b></div>
          <br></br><b>Step 1:</b> Choose a short sentence or phrase.
          <br></br>

          <br></br><b>Step 2:</b> Inhale deeply and slowly.As you exhale, 
          <br></br>

          <br></br><b>Step 3:</b> say the chosen sentence or phrase slowly and clearly.
          <br></br>

          <br></br><b>Step 4:</b> Focus on coordinating your speech with your controlled 
          
          <br></br>
          <br></br><b>Final:</b> breath.Repeat this exercise with different sentences, 
          <br></br>gradually increasing the complexity.</p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>" Remember that consistency is key when practicing these exercises. 
          <br></br>Over time, you can develop better control over your breathing, 
          <br></br>which can in turn help you manage stuttering more effectively. "</p>
        </div>
      </div>
    </>
  )
}

export default BAwareness
