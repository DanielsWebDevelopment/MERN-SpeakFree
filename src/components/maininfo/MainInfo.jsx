import React from 'react'
// CSS IMport
import './maininfo.css'
// ====================== Image IMports
import Img4 from '../../assets/img4.jpg'

const MainInfo = () => {
  return (
    <section>
      <div className="info1">
        {/* =========================How-we-work Image */}
        <div className="info-image">
          <img src={Img4} alt='learning' />
        </div>
        {/* ========================= End How-we-work Image */}

        {/* ==========================Self paced Info */}
        <div id="self__paced-info">
          <h3 className="animate-on-scroll">We're Self-paced!</h3>
          <p className="animate-on-scroll">at our platform, we understand the significance of effective communication and the challenges that stuttering can 
          present. Our innovative approach empowers individuals 
          to take control of their communication skills through 
          a self-taught pace</p>
        </div>
        {/* ========================== End Self paced Info */}
      </div>
    </section>
  )
}

export default MainInfo