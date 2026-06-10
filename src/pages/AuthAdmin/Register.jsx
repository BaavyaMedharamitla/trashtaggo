import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="glass-card" style={{ padding: "40px", maxWidth: "400px", margin: "100px auto", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>Create Account</h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>Join our green volunteer infrastructure network.</p>
      <button className="primary-btn" style={{ width: "100%" }}>Sign Up</button>
      <p style={{ marginTop: "20px", fontSize: "0.9rem" }}>
        Already have an account? <Link to="/login" className="interactive-link">Login</Link>
      </p>
    </div>
  );
}

export default Register;