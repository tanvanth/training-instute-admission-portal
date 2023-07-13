import React from 'react';
import LoginPage from './LoginPage';
import './LoginPage.css';
import SignupPage from './SignupPage';
import './SignupPage.css';
import Home from './Home';
import './Home.css';
import Payment from './Payment';
import './Payment.css';

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
    </Routes>
    </div>
    </BrowserRouter>

  );
};

export default App;