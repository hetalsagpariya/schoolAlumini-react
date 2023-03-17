import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Navbar from '../Dashboard/Navbar'
import Sidebar from '../Dashboard/Sidebar'
import User from './User'
import { Settings } from '@mui/icons-material'
import '../../App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function HomePage() {
    return (
     
        <div>
                {/* <Navbar/> */}
                <div className="container-fluid" id="main">
                 <div className="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                
             </div>
            </div>  
        </div>  


    )
}
