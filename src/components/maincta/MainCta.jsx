import React from 'react'
// CSS IMport
import './maincta.css'
import { Link } from 'react-router-dom';

const MainCta = () => {
  return (
    // ========================== Main CTA Section
    <section>
      <div id="cta-container">
        {/* ====================CTA Container */}
        <div className="card1">
          <Link to="/stutter#title">
            <h3>Work on your <br />stuttering</h3>
          </Link>
        </div>

        <div className="card">
          <Link to="/communication#title">
            <h3>Informational <br />Communication Tips</h3>
          </Link>
        </div>

       <div className="card">
          <Link to="/exercises#title" className='exercise-cta'>
            <h3>Exercises</h3>
          </Link>
        </div>
      </div>
      {/* ====================CTA Container */}
      <div className="innerline"></div>
    </section>
    // ========================== End Main CTA Sections
  )
}

export default MainCta