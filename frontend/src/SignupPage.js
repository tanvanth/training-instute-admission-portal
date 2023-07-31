import React, { useState } from 'react';
import './SignupPage.css';
import { BrowserRouter as Router, Route,useNavigate, Link } from 'react-router-dom';
import { addLogin } from './Api.js'


const SignupPage = () => {

  const navigate = useNavigate();
  
  const[errorMessage,setErrorMessage] = useState('');

  const [formDate, setFormDate] = useState({
    username: '',
    email: '',
    password:'',
  });

  const handleChange = (e) => {
    setFormDate({ ...formDate, [e.target.id]: e.target.value });
    // console.log(formDate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!formDate.username || !formDate.password === true){
      alert("Please fill all the details");
    }else{
  
    try {
      const res = await addLogin(formDate);
      if (res.status === 200) {
        console.log('User Added Successfully');
        setTimeout(() => {
          navigate('/Home');
        }, 1000);
      }
    } catch (error) {
      console.log(error); 
      

      
    }
  
    console.log(formDate);
  };
}

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Registration</h2>
      {errorMessage && <p>{setErrorMessage}</p>}
      <fieldset className="login-fieldset">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            onChange={handleChange}
          />

        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="login-button">
          Register
        </button>
      </fieldset>
      <p className="crea">
        Already Have an Account? <Link to="/">Login</Link>
      </p>
    </form>
  );
};

export default SignupPage;