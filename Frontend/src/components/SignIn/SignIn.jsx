import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ for navigation

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      setError("");
      setSuccess("Login successful ✅");

      // save token in localStorage for future requests
      localStorage.setItem("token", data.token);

      // redirect (example: home page)
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit" style={{ marginBottom: "1rem" }}>
          Login
        </button>

        {/* ✅ Forgot Password Button */}
        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <Link to="/forgot-password" style={{ color: "blue" }}>
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;



