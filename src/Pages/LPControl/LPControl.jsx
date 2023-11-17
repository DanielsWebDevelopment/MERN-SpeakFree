import React from 'react'
import './lpcontrol.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'

function LPControl() {
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
            <h1>Loud and Proud!</h1>
            <p className='awareness_info'>"Being "loud and proud" when stuttering means embracing one's 
            speech impediment with confidence and self-assuredness. This approach to 
            stuttering can significantly improve one's speech in several ways. Firstly, 
            it reduces anxiety and fear associated with speaking, enabling individuals to 
            express themselves more freely. When stutterers are unapologetic about their 
            condition, listeners are often more understanding and patient, creating a 
            supportive environment that can enhance fluency. Additionally, speaking loudly 
            and proudly helps stutterers to slow down their speech, which can alleviate the 
            urge to rush or avoid words, resulting in smoother communication. Ultimately, 
            by embracing their stutter and speaking with confidence, individuals can break 
            the cycle of anxiety and self-doubt, leading to improved speech fluency and 
            greater self-esteem."</p>

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
            <div id="breating__exercise1"><b>Loud & Proud Exercises</b></div>

          <br></br><b>Mirror Mantra:</b>
          <br></br><b>Exercise 1:</b> Stand in front of a mirror and practice 
          <br></br>saying positive affirmations or short sentences while maintaining 
          <br></br>eye contact with yourself. Start slowly and gradually increase your 
          <br></br>volume. Focus on making each word clear and confident. Repeat this
          <br></br>exercise daily to build your self-assurance in your speech."
          <br></br>

          <br></br><b>Breathing Breaks:</b>
          <br></br><b>Exercise 2: </b> 
          <br></br>"Incorporate deep breathing exercises into your daily routine. 
          <br></br>Take a few minutes to inhale deeply through your nose, counting to 
          <br></br>four, and then exhale slowly through your mouth, counting to six. 
          <br></br>This exercise can help you stay calm and reduce anxiety, which often 
          <br></br>exacerbates stuttering." 
          <br></br>

          <br></br><b>Public Speaking Workshops:</b> 
          <br></br><b>Exercise 3: </b> 
          <br></br>Attend public speaking workshops or join a speech therapy group 
          <br></br>where you can practice speaking in a supportive environment. 
          <br></br>These sessions provide a safe space to work on your communication 
          <br></br>skills, receive feedback, and build confidence in speaking loud and 
          <br></br>proud."
          <br></br>

          <br></br><b>Mouth and Jaw Exercises</b>
          <br></br><b>Exercise 4: </b>  
          <br></br>Incorporate mouth and jaw exercises into your daily routine to improve 
          <br></br>muscle control and articulation. Simple exercises like stretching 
          <br></br>your jaw, making exaggerated facial expressions, and pronouncing 
          <br></br>tongue twisters can enhance your speech clarity."</p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>" Remember that improving speech fluency takes time and patience. 
            <br></br>Consistent practice of these exercises, along with a positive 
            <br></br>mindset, can help you become more confident and expressive in 
            <br></br>your speech, ultimately reducing stuttering."</p>
        </div>
      </div>
    </>
  )
}

export default LPControl
