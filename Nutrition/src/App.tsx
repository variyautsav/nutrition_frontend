// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Lending from './component/Lending_page'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Lending fontsize={10}></Lending>}></Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
