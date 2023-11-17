import React from 'react'
import './progress.css'
import { Link } from "react-router-dom";
import { TbArrowsLeft } from "react-icons/tb";

function Progress() {
  return (
    <>
      <main className='main_container'>
        <h1 className='progression_title'>Your <span>Progress</span></h1>
        <div className="main_progress-cards">
          <div className="progress_cards">
            <div className="progress-card_title">
              <span className='coming_soon'>Coming Soon!</span>
            </div>
          </div>
          <div className="progress_cards">
          <div className="progress-card_title">
              <span className='coming_soon'>Coming Soon!</span>
            </div>
          </div>
          <div className="progress_cards">
          <div className="progress-card_title">
              <span className='coming_soon'>Coming Soon!</span>
            </div>
          </div>
        </div>

        <div className="checkback_soon">
          <span>Check Back Soon!</span>
          <small>Check out some out our Exercises in the meantime. </small>
        </div>
      </main>
      <div className="prev-btn">
          <Link to="/userexercises" className="previous-home">
            <TbArrowsLeft />
          </Link>
        </div>
    </>
  )
}

export default Progress
