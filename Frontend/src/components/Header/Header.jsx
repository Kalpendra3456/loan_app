// import React from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';
// // import SignIn from '../SignIn/SignIn';

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo">
//         Quick<span className="logo-green">Funds</span>
//       </div>
//       <nav>
//         <ul>
//            <li><Link to="/">Home</Link></li>
//            <li><Link to="/services">Services</Link></li>
//            <li><Link to="/process">How we work?</Link></li>
//            <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/signin">Signin</Link></li>
//         </ul>
//       </nav>
//       <button className="contact-btn">Contact us</button>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // check login state

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin"); // redirect to signin
  };

  return (
    <header className="header">
      <div className="logo">
        Quick<span className="logo-green">Funds</span>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/process">How we work?</Link></li>
          <li><Link to="/about">About Us</Link></li>

          {!token ? (
            // If NOT logged in
            <>
              <li><Link to="/signin">Signin</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          ) : (
            // If logged in
            <>
              <li><Link to="/user-details">Dashboard</Link></li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <button className="contact-btn">Contact us</button>
    </header>
  );
}

export default Header;
