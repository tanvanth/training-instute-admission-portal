import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <body>
    <div >
        <div class="leftnav">
        <a class="active" href="#home">DashBoard</a>
        <a href="#news">Training Institue</a>
        </div>
        <div className='wel' style={{textAlign: "center"}}>

          
               Welcome Aspirant
       
        </div>
        <p className='log'>  
        <Link to='/'>Logout</Link>
        </p>
    </div>
    </body>
  )
}

export default Home