import React, { useEffect, useRef } from "react";
import "./login.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { TbArrowsLeft } from "react-icons/tb";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import gsap from 'gsap';


function Login() {
  const [userReg, setUserReg] = useState("");
  const [pwReg, setPwReg] = useState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const login = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:3001/login", {
      username: userReg,
      password: pwReg,
    }).then((response) => {
        if (response.data.loggedIn === true) {
        setAuth({ ...auth, isAuthenticated: true });
        navigate("/userexercises");
      }
    })
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn === true) {
          setAuth({ ...auth, isAuthenticated: true });
        }
    });
  }, [setAuth, auth]);

  const animation = useRef(null);

  useEffect(() => {
    const animate = animation.current;
    gsap.fromTo(animate, { opacity: 0}, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <section className="login-container" ref={animation}>
        <a href="/" className="home_naviagtion">Navigate back to Home</a>
      <h1 className="account-login-title">Login to your <br></br>Account</h1>
      <small className="sub-login-heading">or Register for one Today!</small>
      <div className="login-card">
        <form onSubmit={login}>
          <label htmlFor="username" className="label">
            <AiOutlineUserAdd className="label-icon"/>
            Username
          </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            onChange={(e) => {
              setUserReg(e.target.value);
            }}
            required
          />

          <label htmlFor="password" className="label">
            <AiOutlineLock className="label-icon"/>
            Password
          </label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            onChange={(e) => {
              setPwReg(e.target.value);
            }}
            required
          />

            <button type="submit" className="login-cta">
              Sign in
            </button>
        </form>
        <p className="signup__info">
          Need an Account? <br></br>
          <span className="login-line">
            <Link to="/register" className="signup">Sign up Now</Link>
          </span>
        </p>
      </div>

      <div className="previous">
      <div className="prev-btn">
        <Link to="/communicationexercises" className="previous-home">
          <TbArrowsLeft />
        </Link>
      </div>
      </div>
    </section>
  );
}

export default Login;
