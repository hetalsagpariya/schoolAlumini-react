import React from 'react'
import { BrowserRouter,Routes, Route, } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage'

import './App.css'
import Dashboard from './components/Dashboard/Dashboard'

export default function App() {
    return (
      <BrowserRouter>
            <>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/admin/login" element={ <LoginPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                    <Route path="/dashboard" element={ <Dashboard/> } />
                    </Routes>
            
            </>
            </BrowserRouter>
    )
}

// const Footer = () => {
//     return (
//         <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="nanomineTechnolabs.com" target="_blank" rel="noopener noreferrer">Nanomine Technolabs LLP</a></p>
//     )
// }

// const FooterStyle = {
//     background: "#222",
//     fontSize: ".8rem",
//     color: "#fff",
//     position: "absolute",
//     bottom: 0,
//     padding: "1rem",
//     margin: 0,
//     width: "100%",
//     opacity: ".5"
// }