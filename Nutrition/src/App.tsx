// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Lending from './component/Lending_page'
import About from './component/About_us'
import ContactUs from './component/Contect_us'
import Dashboard from './component/Main-page/Dashbord'
import Calendar from './component/Main-page/Calender'
import Meal from './component/Main-page/Mealpage'
import Food from './component/Main-page/Fooddiary'



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Lending fontsize={10}></Lending>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contect' element={<ContactUs ></ContactUs>}></Route>

        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
        <Route path='/meal-plan' element={<Meal></Meal>}></Route>
        <Route path='/food-diary' element={<Food></Food>}></Route>
       


      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
