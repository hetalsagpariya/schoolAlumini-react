import React from 'react'
 
export const Navbar = () => {
    return (
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="flex-row d-flex">
                    <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Alumni Management System</a>
                </div>
               
                <div className="navbar-collapse " id="collapsingNavbar">
                   
                    <ul className="navbar-nav ml-auto">
                       
                       
                <li className="nav-item">
                    <a className="nav-link waves-effect waves-light text-white">
                        <i className="fas fa-envelope-open-text">Admin</i>
                    </a>
                  </li>
              
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar