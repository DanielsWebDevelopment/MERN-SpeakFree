import React from 'react'
import './creading.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'


function CReading() {
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
            <h1>Practice Choral Reading</h1>
            <p className='awareness_info'>" Choral reading, a technique where individuals read aloud in unison with a group, 
            can be a powerful tool in assisting those who stutter and enhancing overall 
            speech fluency. When individuals who stutter participate in choral reading, 
            they often experience a reduction in the frequency and severity of their 
            stutters. This is because choral reading creates a synchronized and rhythmic 
            flow of speech, providing a supportive environment where individuals can feel 
            more relaxed and less self-conscious about their speech difficulties. 
            Additionally, choral reading encourages proper breath control, rhythm, 
            and intonation, which are essential elements of fluent speech. Over time, 
            regular participation in choral reading can help individuals build confidence 
            in their speaking abilities and develop more fluid and natural speech 
            patterns, ultimately contributing to improved communication skills and 
            a higher quality of life."</p>

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
            <div id="breating__exercise1"><b>Practing your speech with Choral Reading</b></div>
          <br></br><b>Step 1:</b> <b>Sound Segmentation</b> 
          <br></br>
          <br></br>E.g:Select a passage to read it while 
          <br></br>deliberately pausing at each punctuation mark comma, period, etc.. 
          <br></br>This exercise helps you with stuttering practice phrasing 
          <br></br>

          <br></br><b>Step 2:</b> <b> Expressive Emotions</b>
          <br></br>
          <br></br>E.g: Choose a short script with emotional content, such as a dramatic 
          <br></br>dialogue or a poem. read the text with 
          <br></br>appropriate emotions, focusing on expressing feelings through your 
          <br></br>speech. This exercise helps individuals work on both fluency and 
          <br></br>emotional expression.
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

export default CReading
