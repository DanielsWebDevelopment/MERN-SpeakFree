import React from 'react'
// CSS import
import './about.css'

const About = () => {

  return (
    <section>
      {/* =================================== Main About Title */}
      <h1 id='about-title'>About Us</h1>
      <div className="innerline1"></div>
      {/* =================================== End Main About Title */}
      <div className="about-container">
        {/* =================================== Main About Info */}
        <div className="about-info">
          <p>We are dedicated to empowering individuals on their journey
            <br></br>towards confident and fluent communication.
            <br></br>Our passion lies in assisting those who stutte
            <br></br>to break free from the barriers that hinder 
            <br></br>their speech and to cultivate effective 
            <br></br>communication skills that foster connection
            <br></br> and self-assurance.we understand the unique - 
            <br></br>challenges that come with stuttering Our expert 
            <br></br>team is committed to providing personalized 
            <br></br>guidance, comprehensive resources, 
            <br></br>and evidence-based exercises that pave 
            <br></br>the way for improved 
            <br></br>speech fluency and enhanced 
            <br></br>communication abilities.</p>
        </div>
        {/* =================================== Main About Info */}
      </div>
    </section>
  )
}

export default About