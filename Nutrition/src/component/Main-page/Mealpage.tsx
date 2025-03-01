import React from "react";
import Sidebar from "../../Layout/Sidebar";
import { PlusCircle, XCircle } from "lucide-react";
import Scrambled from "../../assets/IMG/nutData.svg";

const mealsData = [
  { day: "Sunday", meals: [
    { name: "Scrambled Eggs", img: Scrambled },
    { name: "Grilled Chicken Wrap", img: "https://tse3.mm.bing.net/th?id=OIP.lIr_L_AhaYNBfS3rIq1DPgHaF_&pid=Api&P=0&h=180" },
    { name: "Baked Salmon", img: "https://via.placeholder.com/50" }
  ]},
  { day: "Monday", meals: [
    { name: "Avocado Toast", img: "https://via.placeholder.com/50" },
    { name: "Quinoa Salad", img: "https://via.placeholder.com/50" },
    { name: "Turkey Breast", img: "https://via.placeholder.com/50" }
  ]},
  { day: "Tuesday", meals: [
    { name: "Pancakes", img: "https://via.placeholder.com/50" },
    { name: "Grilled Fish", img: "https://via.placeholder.com/50" },
    { name: "Vegetable Stir Fry", img: "https://via.placeholder.com/50" }
  ]},
  { day: "Wednesday", meals: [
    { name: "Oatmeal", img: "https://via.placeholder.com/50" },
    { name: "Chicken Caesar Salad", img: "https://via.placeholder.com/50" },
    { name: "Beef Steak", img: "https://via.placeholder.com/50" }
  ]},
  { day: "Thursday", meals: [
    { name: "Smoothie Bowl", img: "https://via.placeholder.com/50" },
    { name: "Vegetable Soup", img: "https://via.placeholder.com/50" },
    { name: "Grilled Shrimp", img: "https://via.placeholder.com/50" }
  ]},
  { day: "Friday", meals: [
    { name: "French Toast", img: "https://via.placeholder.com/50" },
    { name: "Sushi Rolls", img: "https://via.placeholder.com/50" },
    { name: "Lentil Curry", img: "https://via.placeholder.com/50" }
  ]},
  { day: "Saturday", meals: [
    { name: "Greek Yogurt & Berries", img: "https://via.placeholder.com/50" },
    { name: "Pasta Primavera", img: "https://via.placeholder.com/50" },
    { name: "BBQ Chicken", img: "https://via.placeholder.com/50" }
  ]}
];

const Meal: React.FC = () => {
  return (
    <div className="row mt-3">
      <div className="col-lg-2">
        <Sidebar />
      </div>
      <div className="col-lg-10">
        <nav className="navbar navbar-light bg-white shadow-sm px-4 d-flex justify-content-between">
          <h5 className="mb-0">Hello, Adam! 👋
            <h6 className="text-muted">Let’s begin our journey to better health</h6>
          </h5>
          <div className="d-flex align-items-center p-2 rounded bg-white shadow-sm" style={{ width: "250px" }}>
            <div className="profile-img me-2">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="User" className="rounded-circle" width="40" height="40" />
            </div>
            <div>
              <h6 className="mb-0 fw-bold">Adam Vasylenko</h6>
              <small className="text-muted">Member</small>
            </div>
          </div>
        </nav>

        <table className="table table-bordered meal-plan-table mt-3">
          <thead className="thead-dark">
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {mealsData.map(({ day, meals }, index) => (
              <tr key={index}>
                <td className="font-weight-bold">{day}</td>
                {meals.map((meal, i) => (
                  <td key={i} className="text-center">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={meal.img} alt={meal.name} className="rounded" width="70" height="70" />
                    <span className="fw-bold mt-1">{meal.name}</span>
                    <div className="d-flex gap-2 mt-2">
                      <PlusCircle className="text-success" role="button" />
                      <XCircle className="text-danger" role="button" />
                    </div>
                  </div>
                </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Meal;
