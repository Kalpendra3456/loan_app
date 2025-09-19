// LoanDetails.jsx
import React from 'react';
import './LoanDetails.css';
import { useNavigate } from 'react-router-dom';

const LoanDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="loan-details">
      <h2>Personal Loan Details</h2>
      <p><strong>Loan Amount:</strong> ₹1,000 – ₹50,000</p>
      <p><strong>Interest Rate:</strong> 12% p.a.</p>
      <p><strong>Tenure:</strong> 3–12 months</p>
      <p><strong>Processing Fee:</strong> 2% of the loan amount</p>
    <button onClick={() => navigate('/loanform')}>Apply Now</button>
    </div>
  );
};

export default LoanDetails;