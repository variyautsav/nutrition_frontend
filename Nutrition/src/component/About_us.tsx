import React  from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const About:React.FC = () =>{
    return(
        <>

        <Navbar></Navbar>
        
        <section className="contect_info">
            <h4 className="contect_heading">CRONOMETER</h4>
            <h1 className="contect_sub_heading">About the Company</h1>
            <br /><br />
            <div className="para">            <p className="sub_sub_content">Welcome to [Your Website Name], your ultimate companion for tracking daily nutrition and achieving better health. We understand that maintaining a balanced diet can be challenging, and that’s why we created this platform—to help you effortlessly monitor your daily nutrition intake. Whether you’re looking to lose weight, build muscle, or simply lead a healthier lifestyle, our tool provides you with accurate insights to make informed dietary choices.</p>
            <br /><br />
            <p className="sub_sub_content">Our nutrition tracker is designed to log your meals, analyze nutrient intake, and provide valuable recommendations based on your personal health goals. By keeping track of essential macronutrients like proteins, fats, and carbohydrates, as well as vital micronutrients such as vitamins and minerals, you can ensure that your body gets what it needs every day. Our user-friendly interface makes it easy to log meals, scan food items, and even set personalized goals for better nutrition management.</p>
            </div>
            <br /><br />
            <div className="img text-center">           
            <img src="https://plus.unsplash.com/premium_photo-1700760415890-cb0977f4cda7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG51dHJpdGlvbiUyMHVzZSUyMGZvciUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D" alt=""  />
            </div>
            <br /><br />

            <p className="sub_sub_content">Our nutrition tracker is designed to log your meals, analyze nutrient intake, and provide valuable recommendations based on your personal health goals. By keeping track of essential macronutrients like proteins, fats, and carbohydrates, as well as vital micronutrients such as vitamins and minerals, you can ensure that your body gets what it needs every day. Our user-friendly interface makes it easy to log meals, scan food items, and even set personalized goals for better nutrition management.</p>
            <br /><br />
 
        </section>

        <Footer></Footer>


        </>
    )
}
export default About