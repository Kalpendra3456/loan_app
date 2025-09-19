import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-card">
          <img src="https://cdn-icons-png.flaticon.com/128/2910/2910791.png" alt="Personal loan" className="service-icon" />
          <h3>Personal Loan</h3>
          <p>Personal loans provide borrowers with flexibility in how they use the funds.</p>
          <button onClick={() => navigate('/personal-loan-details')}>Apply</button>
        </div>
        <div className="service-card">
          <img src="https://cdn-icons-png.flaticon.com/128/2910/2910792.png" alt="Business loan" className="service-icon" />
          <h3>Business Loan</h3>
          <p>Business Loan Services provide financial assistance to businesses for various purposes.</p>
          <button onClick={() => navigate('/business-loan-details')}>Apply</button>
        </div>
        <div className="service-card">
          <img src="https://cdn-icons-png.flaticon.com/128/2910/2910793.png" alt="Auto loan" className="service-icon" />
          <h3>Auto Loan</h3>
          <p>Auto Loan Services provide financing options for individuals and businesses to purchase a vehicle.</p>
          <button onClick={() => navigate('/auto-loan-details')}>Apply</button>
        </div>
        <div className="service-card">
          <img src="https://cdn-icons-png.flaticon.com/128/2910/2910794.png" alt="Student loan" className="service-icon" />
          <h3>Student Loan</h3>
          <p>Student Loan Services help students finance their education with flexible repayment options.</p>
          <button onClick={() => navigate('/student-loan-details')}>Apply</button>
        </div>
      </div>
      <button className="view-more-btn" onClick={() => alert('View More functionality not implemented yet!')}>
        View More
      </button>
    </section>
  );
}

export default Services;