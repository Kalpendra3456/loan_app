import React from 'react';
import './UserDetails.css';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No user details available.</p>;
  }

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>Job Type:</strong> {formData.jobType}</p>
      <p><strong>Salary:</strong> {formData.salary}</p>
      <p><strong>Company Name:</strong> {formData.companyName}</p>
      <p><strong>Bank Account:</strong> {formData.bankAccount}</p>
      <p><strong>IFSC Code:</strong> {formData.ifsc}</p>
      <p><strong>Aadhaar:</strong> {formData.aadhaar?.name}</p>
      <p><strong>PAN:</strong> {formData.pan?.name}</p>
      <p><strong>Selfie:</strong> {formData.selfie?.name}</p>
    </div>
  );
};

export default UserDetails;