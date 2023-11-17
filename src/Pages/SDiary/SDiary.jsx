import React from 'react'
import './sdiary.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'


function SDiary() {
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
            <h1>Take notes to Improve your speech</h1>
            <p className='awareness_info'>"Creating a stuttering diary can be a powerful tool in the journey to 
            improve stuttering. This diary serves as a personal record of one's 
            speech patterns, experiences, and emotions related to stuttering. 
            By diligently documenting instances of stuttering, individuals can 
            gain valuable insights into their speech impediment. Analyzing these 
            entries over time allows individuals to identify patterns, triggers, 
            and specific situations that exacerbate their stuttering. Moreover, a 
            stuttering diary helps in tracking progress, 
            which can be immensely motivating. "</p>

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
            <div id="breating__exercise1"><b>Notes Exercises</b></div>
          <br></br>
          <br></br><b>Creative Writing</b>
          <br></br><b>Exercise 1:</b> 
          <br></br>Set aside 15-20 minutes each day to engage in creative writing. 
          <br></br>It can be a journal entry, a short story, or even poetry. 
          <br></br>Let your thoughts flow freely onto the page without judgment. 
          <br></br>This exercise stimulates your creativity, improves your writing skills, 
          <br></br>and serves as a therapeutic outlet for self-expression."
          <br></br>

          <br></br><b>Gratitude Journaling</b>
          <br></br><b>Exercise 2: </b> 
          <br></br>Before bed, write down three things you're grateful for each day. 
          <br></br>Be specific and reflective. This exercise encourages a positive mindset,
          <br></br> enhances mindfulness, and can improve your overall outlook on life." 
          <br></br>

          <br></br><b>Daily Mindfulness Walk</b> 
          <br></br><b>Exercise 3: </b> 
          <br></br>Take a 15-20 minute walk in nature or a quiet neighborhood. 
          <br></br>Pay close attention to your surroundings—the rustling leaves, 
          <br></br>chirping birds, or the sensation of your feet hitting the ground. 
          <br></br>Engage your senses fully and be present in the moment. 
          <br></br>This daily ritual helps you connect with nature, reduce stress, 
          <br></br>and increase your awareness of the world around you."
          <br></br>

          <br></br><b>Digital Detox Hour</b>
          <br></br><b>Exercise 4: </b>  
          <br></br> Dedicate one hour each day to disconnect from electronic devices 
          <br></br>such as phones, tablets, and computers. Use this time for reading, 
          <br></br>hobbies, or face-to-face interactions with loved ones. 
          <br></br>This exercise promotes a healthier relationship with technology,
           <br></br>reduces screen time, and encourages meaningful human connections."
          
          <br></br>
          <br></br><b>Body Stretching Routine</b>
          <br></br><b>Final Exercise:</b>
          <br></br>Create a simple stretching routine comprising neck, shoulder, back, 
          <br></br>and leg stretches. Perform these stretches for 10-15 minutes every 
          <br></br>morning or evening. Focus on each stretch, holding it for 20-30 seconds,
          <br></br> and pay attention to how your body feels. Regular stretching increases 
          <br></br> flexibility, reduces muscle tension, and promotes overall physical 
          <br></br>well-being.</p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>"Remember that consistency is key when practicing these exercises. 
            <br></br>Incorporating them into your daily or weekly routine can lead 
            <br></br>to significant improvements in various aspects of your life, 
            <br></br>from mental well-being to physical health and personal growth."</p>
        </div>
      </div>
    </>
  )
}

export default SDiary
