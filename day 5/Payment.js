import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [errors, setErrors] = useState({});

  const handleAccountNameChange = (e) => {
    setAccountName(e.target.value);
  };

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    let isValid = true;

    if (accountName.trim() === '') {
      validationErrors.accountName = 'Account name is required';
      isValid = false;
    }

    if (accountNumber.trim() === '') {
      validationErrors.accountNumber = 'Account number is required';
      isValid = false;
    } else if (!/^\d+$/.test(accountNumber.trim())) {
      validationErrors.accountNumber = 'Invalid account number';
      isValid = false;
    }

    if (cvv.trim() === '') {
      validationErrors.cvv = 'CVV is required';
      isValid = false;
    } else if (!/^\d{3,4}$/.test(cvv.trim())) {
      validationErrors.cvv = 'Invalid CVV';
      isValid = false;
    }

    if (isValid) {
      // Perform payment logic
      console.log('Payment submitted');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    
    <div className="payment-container">
      <h2>Payment Portal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="account-name">Account Name:</label>
          <input
            type="text"
            id="account-name"
            value={accountName}
            onChange={handleAccountNameChange}
            required
          />
          {errors.accountName && <span className="error">{errors.accountName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="account-number">Account Number:</label>
          <input
            type="text"
            id="account-number"
            value={accountNumber}
            onChange={handleAccountNumberChange}
            required
          />
          {errors.accountNumber && <span className="error">{errors.accountNumber}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCVVChange}
            required
          />
          {errors.cvv && <span className="error">{errors.cvv}</span>}
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;