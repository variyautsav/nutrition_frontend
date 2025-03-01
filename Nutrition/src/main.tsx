import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
