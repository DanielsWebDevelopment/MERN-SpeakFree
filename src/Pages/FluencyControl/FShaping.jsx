import React from "react";
import "./fshaping.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import blobs2 from "../../assets/blob2.json";
import { IoIosArrowBack } from "react-icons/io";
import Lottie from "lottie-react";

function FShaping() {
  const [revealExercise, setRevealExercise] = useState(false);

  return (
    <>
      <div className="awareness__container">
        <div className="blobs" style={{ width: "300px" }}>
          <Lottie animationData={blobs2} className="blob" />
        </div>
        <div className="dashboard-prev">
          <Link to="/userexercises">
            <IoIosArrowBack />
            Back to dashboard
          </Link>
        </div>
        <div className="awareness_exercises_card">
          <h1>Speak with more Fluency Control</h1>
          <p className="awareness_info">
            "Fluency control techniques play a pivotal role in assisting
            individuals who stutter to achieve smoother and more confident
            speech. Stuttering, characterized by interruptions and disfluencies
            in speech flow, can be a source of frustration and
            self-consciousness. Fluency control strategies, often taught by
            speech therapists, provide valuable tools to manage and mitigate
            these challenges. By practicing techniques such as slow and
            deliberate speech, pausing at appropriate intervals, and using
            gentle onset of sounds, individuals who stutter can regain control
            over their speech patterns. "
          </p>

          <a href="#breathing_control-excerise" id="get-started" className="getting-started">
            Get started Now
          </a>
        </div>
        <div className="blobs1" style={{ width: "150px" }}>
          <Lottie animationData={blobs2} className="blob" />
        </div>

        <div className="instructions__image"></div>
      </div>

      <div id="breathing_control-excerise">
        <div className="breathing-control_card">
          <button
            onClick={() => setRevealExercise(!revealExercise)}
            className="control-button"
          >
            Instructions
          </button>

          {revealExercise && (
            <p className="breating__exercise">
              <div id="breating__exercise1">
                <b>Fluency Control Exercises</b>
              </div>
              <br></br>
              <br></br>
              <b>Relaxation and Visualization:</b>
              <br></br>
              <b>Exercise 1:</b> 
              <br></br>Close your eyes and visualize 
              <br></br>yourself speaking fluently and confidently. 
              <br></br>Combine this with progressive muscle relaxation 
              <br></br>to reduce tension before speaking.
              <br></br>
              <br></br>
              <b>Pausing for Impact:</b>
              <br></br>
              <b>Exercise 2: </b> Incorporate strategic pauses while speaking. 
              <br></br>Pause before important words or phrases to enhance clarity 
              <br></br>and reduce rushing.
              <br></br>
              <br></br>
              <b>Delayed Auditory Feedback "DAF"</b>
              <br></br>
              <b>Exercise 3: </b> Use a DAF device or app that plays your speech 
              <br></br>back with a slight delay. This can disrupt the stuttering 
              <br></br>pattern and encourage smoother speech.
              <br></br>
              <br></br>
              <b>Record and Reflect:</b>
              <br></br>
              <b>Exercise 4: </b>
              <br></br>Record yourself speaking in various situations, 
              <br></br>such as reading aloud, making phone calls, or engaging in conversations. 
              <br></br>Listen to the recordings and identify patterns, both in fluency and disfluency,
              <br></br>to work on specific areas of improvement.
            </p>
          )}
        </div>

        <div className="breathing_subinfo">
          <p>
            "Remember that progress may vary from person to person, 
            <br></br>and it's essential to work with a speech therapist or 
            <br></br>pathologist who can tailor these exercises to your specific 
            <br></br>needs and provide ongoing guidance and support."
          </p>
        </div>
      </div>
    </>
  );
}

export default FShaping;
