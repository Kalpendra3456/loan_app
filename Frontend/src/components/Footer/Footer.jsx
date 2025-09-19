import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">Quick<span className="logo-green">Funds</span></span>
          <p>
            Our mission is to empower individuals and businesses by providing them with the financial resources they need to achieve their goals.
          </p>
          <div className="footer-social">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>OUR SERVICES</h4>
          <ul>
            <li>Personal loan</li>
            <li>Business loan</li>
            <li>Education loan</li>
            <li>Auto loan</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <ul>
            <li>+91-99999 99999</li>
            <li>xyzfhgs@gmail.com</li>
            <li>Address line-1<br />Address line-2,<br />city, state-pin code.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;