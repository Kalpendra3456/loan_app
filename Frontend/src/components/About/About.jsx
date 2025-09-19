import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/money-2024772_1280.png" alt="About illustration" className="about-img" />
        <div>
          <h2>About us</h2>
          <p>
            QuickFunds—Your trusted financial partner for loans. Quick approvals, competitive rates, and personalized solutions to meet your unique needs. Empowering you to achieve your financial goals. Apply online today!
          </p>
        </div>
      </div>
      <form className="about-form">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Phone number" />
        <input type="email" placeholder="Email address" />
        <button type="submit">SEND</button>
      </form>
    </section>
  );
}

export default About;