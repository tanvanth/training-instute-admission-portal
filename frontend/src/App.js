import React from 'react';
import LoginPage from './LoginPage';
import './LoginPage.css';
import SignupPage from './SignupPage';
import './SignupPage.css';
import Home from './Home';
import './Home.css';
import Payment from './Payment';
import './Payment.css';
import Admission from './Admission';
import './Admission.css';
import Course from './Course';
import Placement from './Placement';
import About from './About';
import Contact from './Contact';
import FeedbackForm from './Feedback';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Routes>
    <Route path="/" element={<LoginPage/>}></Route>
    <Route path="/Login" element={<LoginPage/>}></Route>
    <Route path="/Signup" element={<SignupPage/>}></Route>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/Payment" element={<Payment/>}></Route>
    <Route path="/Admission" element={<Admission/>}></Route>
    <Route path="/Course" element={<Course/>}></Route>
    <Route path="/Placement" element={<Placement/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/feedback" element={<FeedbackForm/>}></Route>
    
    </Routes>
    </div>
    </BrowserRouter>

  );
};

export default App;