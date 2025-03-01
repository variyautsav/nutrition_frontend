import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

import nutData from "../assets/IMG/nutData.svg"
import privacy from "../assets/IMG/privacy.svg"

import dietfruits from "../assets/IMG/dietFruits.svg"
import fasting from "../assets/IMG/fasting.svg"
import report from "../assets/IMG/report.svg"
import { Link } from "react-router-dom";

interface Iprops{
    fontsize:number;
}

const Lending:React.FC<Iprops> = (props) =>{
    return(
            <>
            <section className="Navbar">
            <Navbar></Navbar>
            </section>
            <br /><br /><br />
            <section className="heading " >
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-sm-6">
                            
                    <div className="left-section">
                        <p className="h1" style={{fontSize:62}}>Eat smarter. <br />
                        Live better.</p><br />
                        <p className="text-head-content" style={{fontSize:40}}>Track your calories, exercise, <br />
                        biometrics and health data.</p><br />

                    <button className="btn-heading " >Sign Up - its Free</button>
                    <br /><br />
                    <p className="heading-content text-black">Already have an account? <Link to="/Login" className="heding-link" >Login</Link></p>
                    </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-sm-6">

                    <div className="right-section">

                    <img src="https://images.unsplash.com/photo-1478144592103-25e218a04891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bnV0cml0aW9uJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" alt="" />
                    
                    </div>

                    
                    </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br />
            <section className="services">
                <p className="h1 text-center" style={{fontSize:50}}>Discover your nutrition</p><br />
                <p className="text text-center" style={{fontSize:25}}>Cronometer encourages you to not just count your <br></br>
                calories but to focus on your nutrition as a whole.</p>
                
                <div className="container mt-5">
                    <div className="row">

                        <div className="col sm-4">
                        <div className="service-card">
                        <div className="img text-center">
                            <img src={nutData} alt="" height={100} width={100} />
                            </div>
                            <br />
                            <div className="card-body text-center">
                                <p className="h2">Accurate nutrition data</p>
                                <br />
                                <p className="content" style={{fontSize:18}}>Be confident that the food you log has <br />the correct nutrition data. We verify <br /> every food submission for accuracy.</p>
                            </div>
                            </div>
                        </div>

                        <div className="col sm-4">
                        <div className="service-card">
                        <div className="img text-center">
                            <img src={privacy} alt="" height={100} width={100} />
                            </div>
                            <br />
                            <div className="card-body text-center" >
                                <p className="h2 ">Data privacy & security</p>
                                <br />
                                <p className="content " style={{fontSize:18}}>We take the security of our users' <br /> accounts seriously - we will never sell <br />your account data to third parties.</p>
                            </div>
                            </div>
                        </div>
                    
                    

                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br />

            <section className="features">

            <p className="h1 text-center" style={{fontSize:50}}>Develop healthy habits</p><br />
                <p className="text text-center" style={{fontSize:25}}>Count your calories, ensure you're meeting nutrient targets, and see <br /> your progress over time.</p>

            <div className="container mt-5">
                    <div className="row">

                        <div className="col sm-4">
                        <div className="service-card">
                        <div className="img text-center">
                            <img src={dietfruits} alt="" height={100} width={100} />
                            </div>
                            <br />
                            <div className="card-body text-center">
                                <p className="h2">Diet support</p>
                                <br />
                                <p className="content" style={{fontSize:18}}>Whether you’re Keto, Vegan, <br />or on one recommended by Experts.</p>
                            </div>
                            </div>
                        </div>

                        <div className="col sm-4">
                        <div className="service-card">
                        <div className="img text-center">
                            <img src={report} alt="" height={100} width={100} />
                            </div>
                            <br />
                            <div className="card-body text-center" >
                                <p className="h2 ">Valuable reports <br />and charts</p>
                                <br />
                                <p className="content " style={{fontSize:18}}>Learn how nutrients and <br />biometrics correlate over time.</p>
                            </div>
                            </div>
                        </div>
                    
                    

                    </div>
                </div>


                </section>

                <br /><br />
                <section className="Ad">
                <div className="container  align-items-center justify-content-center min-vh-50">
      <div className="row w-100 align-items-center">
        {/* Left Side - Image */}
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
            <br /><br />
          <img
            src="https://raw.githubusercontent.com/harshu878/nutrimeter/b24e158e4f21902c1fe890e3fcec626ae022ebaf/client/public/Images/manExplain.svg" 
           
            className="img-fluid"
            style={{ maxWidth: "70%", borderRadius: "10px" }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="col-lg-6 col-md-12 text-center ">
         
          <h4 className="Rhite-text fw-bold">Are you a healthcare professional?</h4>
          <p className="Rhite-sub-text">
            Check out our software designed for nutritionists, <br /> dietitians,
            research teams, schools, and hospitals.
          </p>
          <a href="#" className="btn btn-outline-success px-4 py-2">
            Learn About Pro
          </a>
        </div>
      </div>
    </div>

                </section>
                
                <section className="Footer">
            <Footer></Footer>
            </section>

            </>
    )
}
export default Lending