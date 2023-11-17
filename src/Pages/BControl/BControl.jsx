import React from 'react'
import './bcontrol.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'

function BControl() {
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
            <h1>Breath Control Exercise</h1>
            <p className='awareness_info'>"Breath control plays a pivotal role in managing 
            and improving stuttering. Stuttering, a speech disorder characterized by 
            disruptions in the fluency of speech, often stems from irregular breathing 
            patterns and tense vocal mechanisms. Through focused breath control exercises,
            individuals who stutter can learn to regulate their airflow and reduce the 
            tension that exacerbates their speech difficulties. By cultivating a mindful
            awareness of their breathing, stutterers can develop the ability to 
            initiate speech with a controlled exhalation, resulting in smoother 
            and more fluent communication. Moreover, proper breath control techniques 
            enable individuals to pause and breathe strategically during moments of 
            stuttering, providing them with a valuable tool to regain composure and 
            continue speaking with increased fluency. Over time, consistent practice 
            of these techniques can significantly enhance speech fluency and confidence,
            empowering individuals who stutter to express themselves more effectively 
            and engage in communication with greater ease."</p>

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
            <div id="breating__exercise1"><b>Practice with speech with Breath Control</b></div>
            <br></br><b>Step 1:</b> <b>Diaphragmatic Breathing:</b> 
          <br></br>
          <br></br>E.g: Sit or lie down in a comfortable position. 
          <br></br>Place one hand on your chest and the other on your abdomen.
          <br></br>Inhale slowly through your nose, expanding your abdomen not 
          <br></br>your chest.Exhale slowly and evenly through pursed lips, 
          <br></br>feeling your abdomen contract.Repeat for 5-10 minutes, 
          <br></br>focusing on deep, controlled breaths.
          <br></br>

          <br></br><b>Step 2:</b> <b> Breath Holds and Release </b>
          <br></br>
          <br></br>E.g: Inhale deeply through your nose.Hold your breath
          <br></br>for a count of five.Exhale slowly through pursed lips, 
          <br></br>controlling the release.Repeat this exercise, 
          <br></br>increasing the breath hold count gradually.
          <br></br>

          <br></br><b>Step 3:</b> <b> Straw Breathing: </b>
          
          <br></br>
          <br></br>E.g: Take a drinking straw and place it between your lips. Inhale slowly 
          <br></br>through the straw, making sure it stays in place. 
          <br></br>Exhale gently through the straw, controlling the airflow. 
          <br></br>This exercise helps regulate airflow and reduces tension 
          <br></br>in the vocal cords.
          <br></br>

          <br></br><b>Step 4:</b><b> Alternate Nostril Breathing </b>
          <br></br>

          <br></br>
          E.g: Sit comfortably with your spine straight.Close your right nostril 
          <br></br>with your right thumb and inhale slowly through your left 
          <br></br>nostril.Close your left nostril with your ring finger
          <br></br>and release the right nostril.Exhale through the right 
          <br></br>nostril.Repeat, alternating nostrils for several minutes. 
          <br></br>This exercise helps balance airflow and calms the mind.
          <br></br>
          
          <br></br><b>Step 5:</b><b> Humming Exercises:</b>
          <br></br>

          <br></br>
          E.g: Inhale deeply through your nose. Exhale while humming gently. 
          <br></br>Focus on maintaining a steady, controlled hum throughout 
          <br></br>the exhalation.Gradually extend the duration of your hum 
          <br></br>with practice.This exercise warms up your vocal cords 
          <br></br>and encourages controlled airflow.
          <br></br>

          <br></br><b>Step 6:</b><b> Counted Breaths: </b>
          <br></br>

          <br></br>E.g: Sit or stand comfortably with your eyes closed. 
          <br></br>Inhale deeply through your nose, counting to four. 
          <br></br>Hold your breath for a count of four. Exhale slowly 
          <br></br>and evenly through your mouth, counting to four.Pause 
          <br></br>for a count of four before starting the next breath cycle. 
          <br></br>Adjust the count to match your comfort level, 
          <br></br>gradually extending it as you progress.
          </p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>"Practice these breath control exercises regularly, 
          <br></br>ideally incorporating them into your daily routine. 
          <br></br>Over time, these exercises can significantly enhance 
          <br></br>your breath control and contribute to improved speech 
          <br></br>fluency."</p>
        </div>
      </div>
    </>
  )
}

export default BControl
