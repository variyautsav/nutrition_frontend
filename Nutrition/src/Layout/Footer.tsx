import React from "react";

import { Link } from "react-router-dom";
import LOGO from "../assets/IMG/Logo.png"


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-4 text-center text-md-start">
          <Link to="/" className="navbar-brand">
    <img   src={LOGO} alt=""/>
    </Link>
          </div>

          {/* Links Section */}
          <div className="col-md-8">
            <div className="row">
              <div className="col-6 col-md-4">
                <h5 className="fw-bold">Cronometer</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-light text-decoration-none">For Individuals</a></li>
                  <li><a href="#" className="text-light text-decoration-none">For Professionals</a></li>
                  <li><a href="#" className="text-light text-decoration-none">Privacy</a></li>
                  <li><a href="#" className="text-light text-decoration-none">Terms</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <h5 className="fw-bold">The Company</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
                  <li><a href="#" className="text-light text-decoration-none">Crono Blog</a></li>
                  <li><a href="#" className="text-light text-decoration-none">Crono Forums</a></li>
                
                  <li><a href="#" className="text-light text-decoration-none">Support</a></li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <h5 className="fw-bold">Partners & Affiliates</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-light text-decoration-none">Affiliate Program</a></li>
                  <li><a href="#" className="text-light text-decoration-none">Media Kit</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="text-center mt-3">
          <p className="mb-0">Copyright &copy; 2011-2022</p>
          <p className="mb-0 fw-bold">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;