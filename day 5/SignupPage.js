import React from 'react';
import './SignupPage.css';
import {Link } from 'react-router-dom';


const SignupPage= () => {
  return (
    <form id="register">
    <div className="login-form">
      <fieldset className="login-fieldset">
        <p>Registration</p>
        <div className="form-group">
          <label className="form-label"><legend>Username</legend></label>
          <input type="text" id="username" name="username" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label"><legend>Email</legend></label>
          <input type="email" id="email" name="email" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label"><legend>Password</legend></label>
          <input type="password" id="password" name="password" className="form-input" required />
        </div>
        
        <div className="telephone">
          <label className="form-label"><legend>mobile number</legend></label>
          <input type="tel" id="mobile" name="mobile" className="form-input" required />
        </div>
          <br></br>
        
        <button type="submit" className="login-button">Register</button>
        <p><Link to="/Login" >Have an account</Link></p>
      </fieldset>
      
    </div>
    </form>

  );
};

export default SignupPage;