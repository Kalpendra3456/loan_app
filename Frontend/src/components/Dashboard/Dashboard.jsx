import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/signin"; // redirect if not logged in
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch user
        const userRes = await fetch("http://localhost:5000/me", {
          headers: { Authorization: token },
        });
        const userData = await userRes.json();
        setUser(userData);

        // Fetch loans
        const loanRes = await fetch("http://localhost:5000/loans", {
          headers: { Authorization: token },
        });
        const loanData = await loanRes.json();
        setLoans(loanData);
      } catch (err) {
        console.error("❌ Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/signin";
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user?.email}</h2>
      <p>Account ID: {user?.id}</p>

      <h3>Your Loans</h3>
      {loans.length === 0 ? (
        <p>No loans found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Next Due Date</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>₹{loan.amount}</td>
                <td>{loan.status}</td>
                <td>{loan.due_date ? loan.due_date : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={() => (window.location.href = "/loanform")}
        style={{ marginTop: "20px" }}
      >
        Apply New Loan
      </button>

      <button
        onClick={handleLogout}
        style={{ marginTop: "20px", marginLeft: "10px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
