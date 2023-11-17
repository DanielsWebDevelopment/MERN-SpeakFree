import React from "react";
import "./register.css";
import { useState } from "react";
import  Axios  from "axios";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [userNameReg, setUserNameReg] = useState("");
  const [pwdReg, setPwdReg] = useState("");


  Axios.defaults.withCredentials = true
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: userNameReg,
      password: pwdReg,
    }).then((response) => {
      console.log(response);

      if (response.status === 200) {
        toast.success("Registration Successful!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 8000,
          hideProgressBar: false,
          closeButton: false,
          draggable: false,
          pauseOnHover: true,
        });
      }
    });
  };

  return (
    <section className="login-container">
      <h1 className="register_title">Register your <br></br>Account!</h1>
      <ToastContainer />
      <div className="login-card">
        <form>
        <label htmlFor="username" className="label">
            <AiOutlineUserAdd className="label-icon"/>
            Username
          </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            placeholder="Enter Username"
            onChange={(e) => {
              setUserNameReg(e.target.value);
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
            placeholder="Enter Password"
            onChange={(e) => {
              setPwdReg(e.target.value);
            }}
            required
          />

          <button className="login-cta" onClick={register}>create Account</button>
        </form>
          <div className="register_link">
          <span className="login-line">
            <Link to="/login" className="login-link">
              Back to Sign in
            </Link>
          </span>
        </div>

      </div>
    </section>
  );
}

export default Register;
