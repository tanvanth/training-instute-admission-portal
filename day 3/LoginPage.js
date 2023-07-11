import React, { useState } from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g. send login request to server
    console.log('Email:', email);
    console.log('Password:', password);
  };
  

  return (
    
    <div className="login-container">
       <div>
        <h1>Training Institute Admission Portal</h1>
       </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-button" id="loginbtn">Login</button><br></br>
        <Link to="/Signup" >Signup</Link>
      </form>
    </div>
  );
};

export default LoginPage;