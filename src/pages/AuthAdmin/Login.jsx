import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaLeaf,
  FaGoogle,
  FaGithub,
  FaEnvelope,
  FaLock
} from "react-icons/fa";

import ThemeToggle from "../../components/ThemeToggle";

// COMMENTED OUT: Bypassing the external broken component so Vite doesn't throw compilation errors
// import ParticlesBackground from "../../components/ParticlesBackground";

import "../../styles/login.css";

function Login() {
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

      {/* 1. SAFE INLINE CSS REPLACEMENT FOR PARTICLES BACKGROUND */}
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
            animation: `float-particles-login ${Math.random() * 8 + 5}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 2}s`
          }} />
        ))}
      </div>

      <div className="floating-blur blur1"></div>
      <div className="floating-blur blur2"></div>
      <div className="floating-blur blur3"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <FaLeaf className="logo-leaf" />
          <span>TrashTagGo</span>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Login Section */}
      <section className="login-section" style={{ zIndex: 1 }}>
        <motion.div
          className="glass-card login-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="login-header">
            <div className="login-icon">
              <FaLeaf />
            </div>
            <h1>Welcome Back</h1>
            <p>
              Continue your environmental journey, participate in cleanups and earn
              GreenCoins for your contributions.
            </p>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
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
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember Me
              </label>
              <Link
                to="/forgot-password"
                className="forgot-link"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="primary-btn"
            >
              Sign In
            </button>

            <button
              type="button"
              className="secondary-btn"
            >
              Continue as Guest
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
          <div className="login-footer">
            <p>Don't have an account?</p>
            <Link to="/register">Create Account</Link>
          </div>
        </motion.div>
      </section>

      {/* 2. INLINE ANIMATION KEYFRAMES DECLARATION */}
      <style>{`
        @keyframes float-particles-login {
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

export default Login;