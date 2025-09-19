import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Quick and Easy Loans for Your Financial Needs.</h1>
        <p>
          Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.
        </p>
        <button className="get-started-btn">Get started</button>
      </div>
      <div className="hero-image">
        <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/money-2024772_1280.png" alt="Bank illustration" />
        {/* Replace with your own image if needed */}
      </div>
    </section>
  );
}

export default Hero;