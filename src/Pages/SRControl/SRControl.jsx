import React from 'react'
import './srcontrol.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'

function SRControl() {
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
            <h1>Speech Rate Control</h1>
            <p className='awareness_info'>"Speech rate control is a valuable technique that can 
            significantly enhance the fluency and clarity of speech, especially for 
            individuals who struggle with stuttering. This approach involves consciously 
            adjusting the pace at which one speaks, allowing for smoother and more 
            controlled communication. By slowing down their speech rate, individuals 
            who stutter can reduce the likelihood of disruptions and repetitions,
            which are common in stuttering. This deliberate control over speech rate 
            provides a sense of empowerment and confidence, enabling those with 
            stuttering challenges to express themselves more effectively and be better 
            understood by their listeners. "</p>

            <a href='#breathing_control-excerise' id='get-started' className='getting-started'>Get started Now</a>
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
            <div id="breating__exercise1"><b>Speech Rate Control 
            <br></br>Exercises</b></div>
            
          <br></br><b>Controlled Conversations:</b>
          <br></br>
          <br></br><b>Exercise 1:</b>
          <br></br> 
          <p>Begin with deep breathing exercises to improve breath control. 
            <br></br>Inhale deeply through your nose, hold for a few seconds, 
            <br></br>and then exhale slowly through your mouth. Practice this 
            <br></br>before and during speech to maintain a steady pace.</p>
          <br></br>

          <br></br><b>Exercise 2:</b>
          <br></br><span><b>Slow Speech Visualization:</b></span>
          <p>Close your eyes and visualize a winding, slow-moving river. 
            <br></br>As you speak, imagine your words flowing smoothly 
            <br></br>like the river. This visualization exercise can 
            <br></br>help you maintain a controlled and deliberate speech rate.</p> 
          <br></br>

          <br></br><b>Exercise 3:</b> 
          <br></br><span><b>Record and Review:</b></span>
          <p>Record yourself while practicing speeches, reading passages, 
            <br></br>or engaging in conversations. Listen to the recordings 
            <br></br>to assess your speech rate and identify areas for improvement. 
            <br></br>This self-feedback helps you make conscious adjustments in real-time.</p>
          </p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>" Consistent practice of these exercises will not only 
            <br></br>enhance your ability to control your speech rate 
            <br></br>but also contribute to improved fluency and overall 
            <br></br>communication skills, particularly for individuals looking 
            <br></br>to manage stuttering or speak with greater clarity and confidence. "</p>
        </div>
      </div>
    </>
  )
}

export default SRControl
