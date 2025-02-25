

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import LOGO from "../assets/IMG/Logo.png"

const Navbar:React.FC = () =>{

  const [show, setShow] = useState(false);

  const [view, setView] = useState("login");
  const [errorMessage, setErrorMessage] = useState("");

  const [goal, setGoal] = useState("");



  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
  };



    return(
        <>

        
<nav className="navbar navbar-expand-md bg-body-tertiary  sticky-top " >
  <div className="container-xl">
    <Link to="/" className="navbar-brand">
    <img   src={LOGO} alt=""/>
    </Link>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
       
       
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          
          <Link to="/product" className="nav-link active">Blogs</Link>
        </li>
        
        <li className="nav-item">
        <Link to="/contect" className="nav-link active">Contect Us</Link>
        </li>

        <li className="nav-item">
        <Link to="/contect" className="nav-link active ">About Us</Link>
        </li>

        <div className="loginbtn">
      <button className="btn " onClick={() => setShow(true)}>
        LOGIN
      </button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body> 


        <div className="container">
      {view === "login" && (
        <div className="login-container">
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" required />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Remember me</label>
              </div>
              <button type="submit" className="btn ">Login</button>
              <div className="mt-3 text-center">
                <a href="#" onClick={() => setView("forgot")}>Forgot password?</a> | 
                <a href="#" onClick={() => setView("register")}>Register</a>
              </div>
            </form>
          </div>
        </div>
      )}

      {view === "register" && (
      <div className="signup-container">
      <div className="signup-form">
        <h2>Register</h2>
        <form onSubmit={handleSignupSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select className="form-control" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Height (cm)</label>
            <input type="number" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Weight (kg)</label>
            <input type="number" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Goal</label>
            <select 
              className="form-control" 
              required 
              value={goal} 
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="">Select Goal</option>
              <option value="Athletic Body">Athletic Body</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Weight Gain">Weight Gain</option>
              <option value="Healthy Body">Healthy Body</option>
            </select>
          </div>
          {(goal === "Weight Loss" || goal === "Weight Gain") && (
            <div className="mb-3">
              <label className="form-label">Target Weight (kg)</label>
              <input type="number" className="form-control" required />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn">Register</button>
          <div className="mt-3 text-center">
            <a href="#" onClick={() => setView("login")}>
              Back to Login
            </a>
          </div>
        </form>
      </div>
    </div>
      )}

      {view === "otp" && (
        <div className="otp-container">
          <div className="otp-form">
            <h2>Verify OTP</h2>
            <form onSubmit={handleOTPSubmit}>
              <div className="otp-input-group">
                {[...Array(6)].map((_, i) => (
                  <input key={i} type="text" className="otp-input" required />
                ))}
              </div>
              <button type="submit" className="btn btn-primary mt-3">Verify</button>
              <div className="mt-3 text-center">
                <a href="#">Resend OTP</a>
              </div>
            </form>
          </div>
        </div>
      )}

      {view === "forgot" && ( 
        <div className="forget-container">
          <div className="forget-form">
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>
              <button type="submit" className="btn ">Reset Password</button>
              <div className="mt-3 text-center">
                <a href="#" onClick={() => setView("login")}>Back to Login</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>

          
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
      </ul>
      
      
     
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar