import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="glass-card" style={{ padding: "40px", maxWidth: "400px", margin: "100px auto", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>Sign In</h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>Access your environmental node dashboard.</p>
      <button className="primary-btn" style={{ width: "100%" }}>Login</button>
      <p style={{ marginTop: "20px", fontSize: "0.9rem" }}>
        Don't have an account? <Link to="/register" className="interactive-link">Register</Link>
      </p>
    </div>
  );
}

export default Login;