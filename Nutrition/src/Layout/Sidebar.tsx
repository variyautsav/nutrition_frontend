import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import meal from "../assets/IMG/noodles.png";

import { LuLayoutDashboard } from "react-icons/lu";
import { FaCalendar } from "react-icons/fa6";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { GiMeal } from "react-icons/gi";
import { HiOutlineLogout } from "react-icons/hi";
import { LiaNutritionix } from "react-icons/lia";




const Sidebar: React.FC = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light vh-100 p-3 d-none d-md-block mt-0 " style={{ width: "250px" }}>
        <h4 className="text-success fw-bold text-center mb-4 mt-3"> <LiaNutritionix />        Nutrigo</h4>
        <ul className="list-unstyled text-center">
          <li className="mb-2 mt-5">
            <Link to="/dashboard" className="d-block text-dark text-decoration-none p-2 rounded hover-effect">
            <LuLayoutDashboard />   Dashboard
            </Link>
          </li>
          <li className="mb-2 mt-4">
            <Link to="/calendar" className="d-block text-dark text-decoration-none p-2 rounded hover-effect"> <FaCalendar />   Calendar
            </Link>
          </li>
          <li className="mb-2 mt-4">
             <Link to="/meal-plan" className="d-block text-dark text-decoration-none p-2 rounded hover-effect text-center">
             <PiBowlFoodDuotone /> Meal Plan
            </Link>
          </li>
          <li className="mb-2 mt-4">
            <Link to="/food-diary" className="d-block text-dark text-decoration-none p-2 rounded hover-effect">
            <GiMeal />  Suggestion Meal
            </Link> 
          </li>
        </ul>
        <div className="container text-center">
          <div className="logout">
            <Link to="/logout">
              <button className="btn btn-danger btn-rounded">
                  Logout
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="d-md-none">
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileSidebar">
          ☰ Menu
        </button>
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="mobileSidebar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Nutrigo</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/dashboard" className="d-block text-dark text-decoration-none p-2 rounded hover-effect">
                  <i className="bi bi-grid" /> Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/calendar" className="d-block text-dark text-decoration-none p-2 rounded hover-effect">
                  <i className="bi bi-calendar4-week" /> Calendar
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/meal-plan" className="d-block text-dark text-decoration-none p-2 rounded hover-effect">
                  <img className="Logo3" src={meal} alt="" height={20} /> Meal Plan
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/food-diary" className="d-block text-dark text-decoration-none p-2 rounded hover-effect">
                  <i className="bi bi-basket" /> Food Diary
                </Link>
              </li>
            </ul>
            <div className="logout mt-3">
              <Link to="/logout">
                <button className="btn btn-danger btn-rounded">
                <HiOutlineLogout /> Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
