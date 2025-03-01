import React from "react";
import Sidebar from "../../Layout/Sidebar";
import { Card, Button } from "react-bootstrap";


const Food:React.FC = () =>{
    return(
        <>
        <div className="row mt-3">
              <div className="col  col-lg-2 ">
              <section className="sidebar ">
              <Sidebar></Sidebar>
              </section>
        </div>

        <div className=" col  col-lg-10 ">

       
        <div className="flex-grow-1">
        <nav className="navbar-main navbar-light bg-white shadow-sm px-4 d-flex justify-content-between " >
          <h5 className="mb-0">Hello, Adam! 👋 
          <h6 className="iner-text"> <br />Lets begin Our journey to better health</h6>
          </h5>
          
         
    <div className="d-flex align-items-center justify-content-between p-2 rounded bg-white shadow-sm" style={{ width: "250px" }}>
      {/* Profile Section */}
      <div className="d-flex align-items-center">
        <div className="profile-img d-flex justify-content-center align-items-center me-2">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/219/219988.png" 
            alt="User"
            className="rounded-circle"
            width="40"
            height="40"
          />
        </div>
        <div>
          <h6 className="mb-0 fw-bold">Adam Vasylenko</h6>
          <small className="text-muted">Member</small>
        </div>
      </div>
      </div>
        </nav>
      </div>

   <section className="Suggestfood">
        <div className="container mt-5">
          <div className="row">



            <div className="col-sm-6 mt-3">
            <Card className="p-3 border-0 shadow-lg d-flex flex-row" style={{ maxWidth: "600px" }}>
      <Card.Img
        src="https://www.ozonegym.com/wp-content/uploads/sites/27/2021/10/Brown-Rice-Bowl-Turkey-XL.jpg"
        alt="Grilled Turkey Breast"
        className=" rounded me-3"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fw-bold">
            Grilled Turkey Breast with Steamed Asparagus and Brown Rice
          </Card.Title>
          <span className="badge bg-warning text-dark mb-2">Lunch</span>
          <p className="text-muted mb-2">⭐ 4.8/5 (125 reviews)</p>
          <ul className="list-unstyled small mb-3">
            <li><strong>Difficulty:</strong> Medium</li>
            <li><strong>Health Score:</strong> 85/100</li>
            <li><strong>Cook Duration:</strong> 10 minutes</li>
            <li><strong>Total Steps:</strong> 4 steps</li>
          </ul>
        </div>
        <Button variant="success" className="w-100">
          Add to Meal Plan
        </Button>
      </Card.Body>
    </Card>
            </div>
            <div className="col-sm-6 mt-3">
            <Card className="p-3 border-0 shadow-lg d-flex flex-row" style={{ maxWidth: "600px" }}>
      <Card.Img
        src="https://www.ozonegym.com/wp-content/uploads/sites/27/2021/10/Brown-Rice-Bowl-Turkey-XL.jpg"
        alt="Grilled Turkey Breast"
        className="rounded me-3"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fw-bold">
            Grilled Turkey Breast with Steamed Asparagus and Brown Rice
          </Card.Title>
          <span className="badge bg-warning text-dark mb-2">Lunch</span>
          <p className="text-muted mb-2">⭐ 4.8/5 (125 reviews)</p>
          <ul className="list-unstyled small mb-3">
            <li><strong>Difficulty:</strong> Medium</li>
            <li><strong>Health Score:</strong> 85/100</li>
            <li><strong>Cook Duration:</strong> 10 minutes</li>
            <li><strong>Total Steps:</strong> 4 steps</li>
          </ul>
        </div>
        <Button variant="success" className="w-100">
          Add to Meal Plan
        </Button>
      </Card.Body>
    </Card>
            </div>
            <div className="col-sm-6 mt-3">
            <Card className="p-3 border-0 shadow-lg d-flex flex-row" style={{ maxWidth: "600px" }}>
      <Card.Img
        src="https://www.ozonegym.com/wp-content/uploads/sites/27/2021/10/Brown-Rice-Bowl-Turkey-XL.jpg"
        alt="Grilled Turkey Breast"
        className="rounded me-3"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fw-bold">
            Grilled Turkey Breast with Steamed Asparagus and Brown Rice
          </Card.Title>
          <span className="badge bg-warning text-dark mb-2">Lunch</span>
          <p className="text-muted mb-2">⭐ 4.8/5 (125 reviews)</p>
          <ul className="list-unstyled small mb-3">
            <li><strong>Difficulty:</strong> Medium</li>
            <li><strong>Health Score:</strong> 85/100</li>
            <li><strong>Cook Duration:</strong> 10 minutes</li>
            <li><strong>Total Steps:</strong> 4 steps</li>
          </ul>
        </div>
        <Button variant="success" className="w-100">
          Add to Meal Plan
        </Button>
      </Card.Body>
    </Card>
            </div>
            <div className="col-sm-6 mt-3">
            <Card className="p-3 border-0 shadow-lg d-flex flex-row" style={{ maxWidth: "600px" }}>
      <Card.Img
        src="https://www.ozonegym.com/wp-content/uploads/sites/27/2021/10/Brown-Rice-Bowl-Turkey-XL.jpg"
        alt="Grilled Turkey Breast"
        className="rounded me-3"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fw-bold">
            Grilled Turkey Breast with Steamed Asparagus and Brown Rice
          </Card.Title>
          <span className="badge bg-warning text-dark mb-2">Lunch</span>
          <p className="text-muted mb-2">⭐ 4.8/5 (125 reviews)</p>
          <ul className="list-unstyled small mb-3">
            <li><strong>Difficulty:</strong> Medium</li>
            <li><strong>Health Score:</strong> 85/100</li>
            <li><strong>Cook Duration:</strong> 10 minutes</li>
            <li><strong>Total Steps:</strong> 4 steps</li>
          </ul>
        </div>
        <Button variant="success" className="w-100">
          Add to Meal Plan
        </Button>
      </Card.Body>
    </Card>
            </div>


          </div>
        </div>

      </section>

       

        
      
    </div>
    
    </div>
    
       </>
    )
}
export default  Food;










{/* 
  
  NOTE :  for this file

  use the card mens react bootsrtap


  npm install react-bootstrap bootstrap   ---->  that install 

  add that path on App.tsx  ====>  import 'bootstrap/dist/css/bootstrap.min.css';


 

  
  
  
  
  */}
