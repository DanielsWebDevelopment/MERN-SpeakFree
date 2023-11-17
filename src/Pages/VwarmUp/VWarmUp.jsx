import React from 'react'
import './vwarmup.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'


function VWarmUp() {
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
            <h1>Practice Vocal Warm-up</h1>
            <p className='awareness_info'>" Vocal warm-ups can play a transformative role 
            in enhancing speech fluency, particularly for individuals who stutter. 
            Stuttering often results from the involuntary disruptions in the flow 
            of speech, which can be exacerbated by tension and anxiety. Engaging 
            in vocal warm-up exercises before communication can be immensely beneficial. 
            These exercises, which involve gradually and gently stretching the vocal cords 
            and articulatory muscles, not only promote physical relaxation but also 
            help in achieving mental clarity and focus. By releasing tension in the 
            vocal apparatus and calming the nerves, vocal warm-ups pave the way for 
            smoother and more controlled speech. They assist in establishing a rhythm 
            and cadence that can counter the hesitations and repetitions associated 
            with stuttering."</p>

            <a href='#breathing_control-excerise' id='get-started1' className='getting-started'>Get started Now</a>
          </div>
          <div className="blobs1" style={{ width: "200px"}}>
            <Lottie animationData={blobs2} className='blob'/>
          </div>
      </div>

      <div id="breathing_control-excerise">
        <div className="breathing-control_card">
          <button onClick={() => setRevealExercise(!revealExercise)} className='control-button'>Instructions</button>
          
          {revealExercise && (
          <p className='breating__exercise'>
            <div id="breating__exercise1"><b>Practing speaking with Vocal Warm-Up</b></div>
          <br></br><b>Step 1:</b> <b>Deep Breathing:</b> 
          <br></br>
          <br></br>E.g: Begin by taking a deep breath through your nose for a 
          <br></br>count of four. Hold it for a count of four, and then exhale 
          <br></br>slowly through your mouth for a count of eight. Repeat this 
          <br></br>deep breathing exercise five times to relax your body and 
          <br></br>prepare for speech.
          <br></br>

          <br></br><b>Step 2:</b> <b> Lip Trills:</b>
          <br></br>
          <br></br>E.g: Place your lips together and blow air through them 
          <br></br>to create a trilling sound, similar to a motorboat. 
          <br></br>Start with a low pitch and gradually move to a higher pitch. 
          <br></br>Repeat this trill for 1-2 minutes to relax and engage your lips 
          <br></br>and vocal cords.
          <br></br>

          <br></br><b>Step 3:</b> <b> Sustained Vowels:</b>
          <br></br>
          <br></br>E.g: Say each vowel sound A, E, I, O, U individually and hold 
          <br></br>them for 5-10 seconds. Focus on maintaining a smooth and even 
          <br></br>sound without interruptions. Repeat this for a few cycles to 
          <br></br>improve vowel articulation.
          <br></br>

          <br></br><b>Step 4:</b><b> Word Repetition: </b>
          <br></br>
          <br></br>E.g: Begin with one-syllable words e.g., "cat," "dog" and 
          <br></br>gradually move to two-syllable, three-syllable, 
          <br></br>and longer words and phrases. Repeat each word several times, 
          <br></br>emphasizing clarity and fluency. This exercise challenges you 
          <br></br>to handle increasingly complex speech patterns.
          <br></br>
          
          <br></br><b>Step 5:</b><b> Progressive Word Lengths:</b>
          <br></br>

          <br></br>E.g: Begin speaking about your chosen topic while looking at 
          <br></br>yourself in the mirror. Pay close attention to your facial 
          <br></br>expressions, lip movements, and tongue placement.
          <br></br>

          <br></br><b>Step 6:</b><b> Relaxation and Visualization: </b>
          <br></br>

          <br></br>E.g Spend a few minutes before any speaking situation visualizing yourself 
          <br></br>speaking fluently, confidently, and without interruptions. 
          <br></br>Combine this with relaxation techniques like deep breathing to 
          <br></br>reduce anxiety and tension associated with stuttering.
          </p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>" Remember to perform these exercises regularly, ideally as part of 
            <br></br>your daily routine, to gradually build vocal confidence and 
            <br></br>fluency. Over time, these warm-up exercises can contribute to 
            <br></br>improved speech control and reduced stuttering tendencies. "</p>
        </div>
      </div>
      
    </>
  )
}

export default VWarmUp
