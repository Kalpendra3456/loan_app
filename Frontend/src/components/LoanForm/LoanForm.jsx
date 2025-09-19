import React, { useState } from 'react';
import './LoanForm.css';

const LoanForm = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    jobType: "",
    salary: "",
    companyName: "",
    bankAccount: "",
    ifsc: "",
    aadhaar: "",
    pan: "",
    selfie: null, // for file upload
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  // Move to the next step
  const nextStep = () => setStep(step + 1);

  // Move to the previous step
  const prevStep = () => setStep(step - 1);


  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("🚀 Submitting form data:", formData);
  try {
    const res = await fetch("http://localhost:5000/apply-loan",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log("✅ Response:", data);
    if (data.success) {
      //Reset use state form data

      setFormData({
         name: "",
        dob: "",
        gender: "",
        phone: "",
        email: "",
        address: "",
        jobType: "",
        salary: "",
        companyName: "",
        bankAccount: "",
        ifsc: "",
        aadhaar: "",
        pan: "",
        selfie: null, // for file upload
  });
  setStep(1);
} else {
    alert("Error submitting form: " + data.error);
  }

  } catch (err) {
    console.error("❌ Frontend error:", err);
  }
};

  return (
    <div className="loan-application-form">
      <h2>Loan Application Form</h2>
      {step === 1 && (
        <div>
          <h3>Step 1: Personal Information</h3>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} />
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h3>Step 2: Contact Information</h3>
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange}></textarea>
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3>Step 3: Employment Details</h3>
          <input type="text" name="jobType" placeholder="Job Type" value={formData.jobType} onChange={handleChange} />
          <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} />
          <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <h3>Step 4: Bank Details</h3>
          <input type="text" name="bankAccount" placeholder="Bank Account Number" value={formData.bankAccount} onChange={handleChange} />
          <input type="text" name="ifsc" placeholder="IFSC Code" value={formData.ifsc} onChange={handleChange} />
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 5 && (
        <div>
          <h3>Step 5: KYC Documents</h3>
          <input type="file" name="aadhaar" onChange={handleFileChange} />
          <input type="file" name="pan" onChange={handleFileChange} />
          <input type="file" name="selfie" onChange={handleFileChange} />
          <button onClick={prevStep}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default LoanForm;






