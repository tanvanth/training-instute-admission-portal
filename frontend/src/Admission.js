import React, { useState } from 'react';
import './Admission.css';

const Admission = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    let isValid = true;

    if (name.trim() === '') {
      validationErrors.name = 'Name is required';
      isValid = false;
    }

    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      validationErrors.email = 'Invalid email';
      isValid = false;
    }

    if (phone.trim() === '') {
      validationErrors.phone = 'Phone is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone.trim())) {
      validationErrors.phone = 'Invalid phone number';
      isValid = false;
    }

    if (course.trim() === '') {
      validationErrors.course = 'Course is required';
      isValid = false;
    }

    if (isValid) {
      // Perform form submission logic
      console.log('Form submitted');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="admission-form-container">
      <h2>Training Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
          <input type="file"  />
          <button type="submit">Upload</button>
          </form>
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <select id="course" value={course} onChange={handleCourseChange} required>
            <option value="">Select Course</option>
            <option value="Engineering">Engineering</option>
            <option value="Medical">Medical</option>
            <option value="Business">Business</option>
          </select>
          {errors.course && <span className="error">{errors.course}</span>}
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Admission;