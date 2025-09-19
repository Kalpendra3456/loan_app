// filepath: src/components/PrivateRoute/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check if logged in
  return token ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;

