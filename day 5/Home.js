import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <body id="home_pg">
    <div >
        <div class="leftnav">
        <a class="active" href="#home">DashBoard</a>
        <a href="#news">Training Institute</a>
        </div>
        <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/courses">Course info</Link>
          </li>
          <li className="navbar-item">
            <Link to="/trainers">Application form</Link>
          </li>
          <li className="navbar-item">
            <Link to="/payment">Payment</Link>
          </li>
          <li className="navbar-item">
            <Link to="/">Logout</Link>
          </li>
          
        </ul>
      </nav>
    </div>
        
        <div className='wel' style={{textAlign: "center"}}>

          
               Welcome Aspirant !
       
        </div>
        <div>
        <nav className="sidebar">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <Link to="/institute-info">Institute Info</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/placement">Placement</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/admission-status">Admission Status</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/online-interviews">Online Interviews</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/about">About</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            
          </ul>
        </nav>
        </div>
    
        
        
    </div>
    </body>
  )
}

export default Home