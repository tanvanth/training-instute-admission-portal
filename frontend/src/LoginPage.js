

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName.trim() === '') {
      alert('Enter Your Username');
      return;
    }
    navigate('/Home', { state: { userName } });
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <form className="login-form">
      <h3>Login</h3>
      <fieldset className="login-fieldset">
        <div className="form-group">
          <label className="form-label">
            <legend>Username</legend>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            className="form-input"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">
            <legend>Password</legend>
          </label>
          <input type="password" id="password" name="password" className="form-input" required />
        </div>
        <button type="button" className="login-button" onClick={handleLogin}>
          Log In
        </button>
      </fieldset>
      <p className="crea">
        Create an Account? <Link to="/Signup">Register</Link>
      </p>
    </form>
  );
}

export default LoginPage;