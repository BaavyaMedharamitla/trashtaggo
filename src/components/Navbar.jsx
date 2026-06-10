import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaLeaf } from "react-icons/fa";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar-glass-container" style={{
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "calc(100% - 40px)",
      maxWidth: "1200px",
      height: "70px",
      background: "rgba(13, 13, 15, 0.7)",
      backdropFilter: "blur(14px)",
      border: "1px solid rgba(255, 255, 255, 0.06)",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px",
      zIndex: 999,
    }}>
      {/* Brand Identity / Logo Node */}
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
        <FaLeaf style={{ color: "var(--accent-brand, #22c55e)", fontSize: "1.4rem" }} />
        <span style={{ fontSize: "1.4rem", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.5px" }}>
          TrashTagGo
        </span>
      </Link>

      {/* Dynamic Route Context Navigation Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <a href="#features" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500" }}>Features</a>
        <a href="#impact" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500" }}>Impact</a>
        <Link to="/map" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500" }}>Live Map</Link>
      </div>

      {/* Core Action Operations Controller Hub */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Universal Theme Mode Controller Button */}
        <button 
          onClick={toggleTheme} 
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#ffffff",
            padding: "10px 14px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "0.9rem"
          }}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <Link 
          to="/login" 
          className="glass-btn" 
          style={{ 
            padding: "10px 20px", 
            fontSize: "0.9rem", 
            fontWeight: "600",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          Dashboard Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;