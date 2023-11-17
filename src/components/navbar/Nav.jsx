import React from "react";
import "./nav.css";
import Img1 from '../../assets/logo2purple.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return ( 
        <nav>
            <div className="navbar-container">
              <a href="/" className="logo">
                <img src={Img1} alt="logo" />
                <span><i>Speak</i></span>Free
              </a>

              <ul className="nav-menu">
                <li className="nav-links">
                  <a href='/'>Home</a>
                </li>
                <li className="nav-links">
                  <a href="#about-title">About</a>
                </li>
                <li className="nav-links">
                  <a href="#self__paced-info">How we work</a>
                </li>
                <li className="nav-links">
                  <Link to='/login'>Log in</Link>
                </li>
              </ul>
            </div>
         </nav>
    );
};

export default Nav;
