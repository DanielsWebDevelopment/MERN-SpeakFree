import React from 'react'
import './easyrep.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'

function EasyRep() {
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
            <h1>Try speaking with Easy Repition</h1>
            <p className='awareness_info'>"Easy repetition, a technique often used in speech therapy, 
            can be a powerful tool for improving stuttering when speaking. 
            By intentionally repeating certain words or phrases, 
            individuals who stutter can gain greater control over their speech 
            patterns and reduce the instances of stuttering. This approach allows 
            them to build confidence and fluency in their communication. 
            The benefits of easy repetition extend beyond just fluency; 
            it also helps individuals overcome anxiety and fear associated 
            with speaking, as they become more accustomed to their own voice 
            and speech rhythm. Additionally, easy repetition fosters self-
            awareness and self-acceptance, enabling individuals to develop 
            effective coping strategies for managing their stutter and ultimately 
            achieving more fluent and confident communication."</p>

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
            <div id="breating__exercise1"><b>Word Echo</b></div>
          <br></br><b>Exercise 1:</b> Choose a simple word and say it aloud. Then, repeat 
          <br></br>the word three times in a slow and deliberate manner, 
          <br></br>emphasizing each syllable. For example, "Butter-butter-butter."
          <br></br>

          <br></br><b>Phrase Loop Practice</b>
          <br></br><b>Exercise 2: </b> Select a short phrase or sentence and say it once.
          <br></br>Then, repeat the entire phrase multiple times without interruption. 
          <br></br>For instance, "I like ice cream. I like ice cream. I like ice cream." 
          <br></br>

          <br></br><b>Vowel Extension Drill</b> 
          <br></br><b>Exercise 3: </b> Pick a vowel sound e.g., "ah," "ee," "oh" and say 
          <br></br>it slowly. Gradually extend the duration of the vowel sound, 
          <br></br>stretching it out while maintaining a smooth and steady airflow. 
          <br></br>For instance, "Aaaahhhh..."
          <br></br>

          <br></br><b>Sentence Repetition Game</b>
          <br></br><b>Exercise 4: </b>  Create a list of sentences with various structures 
          <br></br>and lengths. Read each sentence aloud, and then repeat 
          <br></br>it while adding slight variations or synonyms to challenge yourself. 
          <br></br>For example, "I enjoy reading books" can become "I like to read books."
          
          <br></br>
          <br></br><b>Breathing and Pausing</b>
          <br></br><b>Final Exercise:</b>Read a short paragraph or story aloud, 
          <br></br>focusing on taking deep breaths and pausing naturally at 
          <br></br>punctuation marks e.g., periods, commas. This exercise emphasizes 
          <br></br>the importance of breath control and pacing in fluent speech.</p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>" Consistent practice of these easy repetition exercises 
            <br></br>can be a valuable part of a comprehensive stuttering therapy program, 
            <br></br>assisting individuals in achieving greater fluency and confidence 
            <br></br>in their communication. "</p>
        </div>
      </div>
    </>
  )
}

export default EasyRep
