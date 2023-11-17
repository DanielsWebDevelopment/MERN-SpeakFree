import React from 'react'
import './wpace.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import blobs2 from '../../assets/blob2.json'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'

function WPace() {
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
            <h1>Word Pacing Exercise</h1>
            <p className='awareness_info'>"Word pacing is a valuable technique for 
            individuals who stutter, offering them a powerful tool to enhance their
             communication fluency. 
            Stuttering often involves disruptions in the natural flow of speech, 
            leading to frustration and anxiety. Word pacing involves deliberately 
            slowing down speech, allowing individuals to regain control over their 
            articulation and rhythm. By consciously spacing out their words and 
            syllables, individuals who stutter can reduce the likelihood of getting 
            stuck on problematic sounds or words. This technique provides a sense of 
            confidence and empowerment, as it allows them to express themselves more 
            smoothly and with less fear of interruptions. Moreover, word pacing can 
            enhance overall communication effectiveness, enabling individuals to convey 
            their thoughts and ideas more clearly, improving their self-esteem and 
            enriching their social interactions."</p>

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
            <div id="breating__exercise1"><b>Practice with Word Pacing</b></div>
            <br></br><b>Step 1:</b> <b>Breathing Rhythms:</b> 
          <br></br>
          <br></br>Sit or stand comfortably and take deep breaths. 
          <br></br>Inhale for a count of four, hold for four, and 
          <br></br>exhale for four. Practice this breathing rhythm to 
          <br></br>establish a relaxed foundation for word pacing.
          <br></br>

          <br></br><b>Step 2:</b> <b> Syllable Clapping: </b>
          <br></br>
          <br></br>E.g: Choose a short sentence or phrase and clap your hands 
          <br></br>lightly after each syllable as you say it. 
          <br></br>For example, say "I am going to the park" 
          <br></br>and clap once for each syllable: 
          <br></br>"I - am - go-ing - to - the - park." This helps you become 
          <br></br>aware of each syllable and encourages a steady pace.
          <br></br>

          <br></br><b>Step 3:</b> <b> Sentence Chunking: </b>
          <br></br>
          <br></br>E.g:  Divide longer sentences into shorter, manageable chunks. 
          <br></br>Pause briefly between these chunks, allowing yourself 
          <br></br>to take a breath and mentally prepare for the next segment. 
          <br></br>Gradually reduce the pause duration as you 
          <br></br>become more comfortable.
          <br></br>

          <br></br><b>Step 4:</b><b> Tongue Twisters: </b>
          <br></br>
          <br></br>E.g: Challenge yourself with tongue twisters like 
          <br></br>"She sells seashells by the seashore." Start slowly 
          <br></br>and increase speed as you gain confidence. The goal is not 
          <br></br>to rush but to enunciate each word clearly.
          <br></br>
          
          <br></br><b>Step 5:</b><b> Metronome Assistance:</b>
          <br></br>

          <br></br>E.g: Use a metronome or a metronome app on your phone. 
          <br></br>Set it to a comfortable pace and practice speaking in sync 
          <br></br>with the beats. Gradually increase the tempo to challenge 
          <br></br>yourself while maintaining clarity.
          <br></br>

          <br></br><b>Step 6:</b><b> Conversational Practice: </b>
          <br></br>

          <br></br>E.g Engage in conversations with friends or 
          <br></br>family members who are aware of your goals. 
          <br></br>Ask them to provide feedback on your pacing. 
          <br></br>Encourage them to gently signal if you start 
          <br></br>speaking too quickly, allowing you to adjust 
          <br></br>your speed in real-time.
          </p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>" Remember that improving speech fluency takes time and patience."</p>
        </div>
      </div>
    </>
  )
}

export default WPace
