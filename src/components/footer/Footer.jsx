import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info">
          <h3>Company</h3>
          <div className="line2"></div>
          <div className="footer-links">
            <a href='/'>Home</a>
            <a href='#about-title'>About</a>
            <a href='#self__paced-info'>How we work</a>
            <a href='/login'>Login</a>
          </div>
        </div>

        <div className="footer-info">
          <h3>Privacy</h3>
          <div className="line2"></div>
          <div className="footer-links">
            <a href='/'>Terms & Conditions</a>
            <a href='/'>Use of Service</a>
          </div>
        </div>

        <div className="footer-info">
          <h3>Our Exercises</h3>
          <div className="line2"></div>
          <div className="footer-links">
            <a href='/communicationexercises'>Communication Exercises</a>
            <a href='/stutterexercises'>Stuttering Exercises</a>
            <a href='/stutter'>Stuttering Tips</a>
            <a href='/communication'>Communication Tips</a>
          </div>
        </div>
        <span className='copyright'>Copyright &copy; 
        2023. SpeakFree, All rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer