import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaLeaf,
  FaGoogle,
  FaGithub,
  FaUser,
  FaEnvelope,
  FaLock
} from "react-icons/fa";

import ThemeToggle from "../../components/ThemeToggle";

// COMMENTED OUT: Safely avoiding the broken component so Vite stops throwing compilation errors
// import ParticlesBackground from "../../components/ParticlesBackground";

// Pointing to login.css directly to borrow its layout definitions safely
import "../../styles/login.css";

function Register() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic tracking routine for custom leaf pointer layer setup
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll("a, button, input, [type='checkbox'], .social-btn");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    const timeoutId = setTimeout(addHoverListeners, 400);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="login-page" style={{ position: "relative", overflow: "hidden" }}>

      {/* DYNAMIC LEAF CURSOR TRACKER CONTAINER */}
      <div 
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          position: "fixed",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 999999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ 
          color: "var(--accent-brand, #22c55e)",
          transform: isHovered ? "rotate(35deg) scale(1.25)" : "rotate(0deg) scale(1)",
          transition: "transform 0.22s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          filter: "drop-shadow(0 2px 6px rgba(34, 197, 94, 0.4))"
        }}>
          <FaLeaf size={18} />
        </div>
      </div>

      {/* Pure CSS animated particles fallback to bypass the broken external file */}
      <div className="custom-particles-fallback" style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none"
      }}>
        {[...Array(15)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            backgroundColor: "var(--accent-brand, #22c55e)",
            opacity: 0.12,
            borderRadius: "50%",
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-particles-register ${Math.random() * 8 + 5}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 2}s`
          }} />
        ))}
      </div>

      <div className="floating-blur blur1"></div>
      <div className="floating-blur blur2"></div>
      <div className="floating-blur blur3"></div>

      {/* Navbar */}
      <nav className="navbar" style={{ zIndex: 2 }}>
        <div className="logo">
          <FaLeaf className="logo-leaf" />
          <span>TrashTagGo</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Register Section */}
      <section className="register-section" style={{ zIndex: 1 }}>
        <motion.div
          className="glass-card register-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="register-header">
            <div className="register-icon">
              <FaLeaf />
            </div>
            <h1>Create Account</h1>
            <p>
              Join thousands of volunteers building cleaner and greener communities.
            </p>
          </div>

          {/* Form */}
          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  placeholder="Create password"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div className="terms-box">
              <input type="checkbox" />
              <span className="remember-me">
                I agree to the Terms & Conditions and Privacy Policy
              </span>
            </div>

            <button
              type="submit"
              className="primary-btn"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* Social Login */}
          <div className="social-buttons">
            <button className="social-btn">
              <FaGoogle />
              Google
            </button>
            <button className="social-btn">
              <FaGithub />
              GitHub
            </button>
          </div>

          {/* Footer */}
          <div className="register-footer">
            <p>Already have an account?</p>
            <Link to="/login">Sign In</Link>
          </div>
        </motion.div>
      </section>

      {/* Encapsulated Animation Frames */}
      <style>{`
        @keyframes float-particles-register {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-50px) translateX(25px);
          }
        }
      `}</style>

    </div>
  );
}

export default Register;