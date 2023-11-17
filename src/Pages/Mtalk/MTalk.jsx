import React from 'react'
import './mtalk.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'

function MTalk() {
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
            <h1>Mirror Talk Exercise</h1>
            <p className='awareness_info'>"Mirror talk, is a therapeutic technique often utilized in speech therapy, can be a valuable tool 
            in helping individuals who stutter. When someone who stutters engages 
            in mirror talk, they sit in front of a mirror and practice speaking while 
            observing their own facial expressions and mouth movements.
             This method offers several benefits for improving stuttering. Firstly, 
             it promotes self-awareness by allowing individuals to see how they form 
             words and syllables, which can help them identify problematic speech patterns."</p>
            <a href='#breathing_control-excerise' id='get-started1' className='getting-started'>Get started Now</a>
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
            <div id="breating__exercise1"><b>Mirror Talk for Stuttering Improvement:</b></div>
          <br></br><b>Step 1:</b> <b>Select a Quiet Environment:</b> 
          <br></br>
          <br></br>E.g:  Find a quiet, distraction-free place where you 
          <br></br>can focus on practicing mirror talk without interruptions.
          <br></br>

          <br></br><b>Step 2:</b> <b> Position the Mirror:</b>
          <br></br>
          <br></br>E.g: Set up the mirror in front of you at a comfortable height.
          <br></br>Make sure you can see your face, lips, and mouth clearly.
          <br></br>

          <br></br><b>Step 3:</b> <b> Warm-Up:</b>
          <br></br>
          <br></br>E.g: Begin with a few deep breaths to relax your body and mind. 
          <br></br>Take slow, deliberate breaths to calm any initial anxiety or tension.
          <br></br>

          <br></br><b>Step 4:</b><b> Choose a Topic:</b>
          <br></br>
          <br></br>E.g: Select a topic or a short passage you'd like to talk about. 
          <br></br>It could be a favorite book, a recent event, or something of 
          <br></br>personal interest. Having a topic in mind will give your practice purpose.
          <br></br>
          
          <br></br><b>Step 5:</b><b> Start Speaking:</b>
          <br></br>

          <br></br>E.g: Begin speaking about your chosen topic while looking at 
          <br></br>yourself in the mirror. Pay close attention to your facial 
          <br></br>expressions, lip movements, and tongue placement.
          <br></br>

          <br></br><b>Step 6:</b><b> Speak Slowly and Clearly:</b>
          <br></br>

          <br></br>E.g Focus on speaking slowly and clearly. Avoid rushing through your words. 
          <br></br>Take your time to articulate each syllable and word.
          </p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>" Remember that improving speech fluency takes time and patience. 
          <br></br>Mirror talk is a valuable technique that, when practiced regularly 
          <br></br>and with dedication, can significantly contribute to enhanced 
          <br></br>communication skills and increased self-assurance for 
          <br></br>individuals who stutter."</p>
        </div>
      </div>
      
    </>
  )
}

export default MTalk
