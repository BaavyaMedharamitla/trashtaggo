import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Premium vector icon stickers replacing unpredictable emojis
import {
  FaMoon,
  FaSun,
  FaMapMarkerAlt,
  FaChartLine,
  FaAward,
  FaShieldAlt,
  FaGlobeAmericas
} from "react-icons/fa";

import {
  MdOutlineCleaningServices
} from "react-icons/md";

import {
  GiRecycle
} from "react-icons/gi";

/**
 * Self-Contained Eco-Particle Background Component
 * Eliminates external file dependency bugs while maintaining peak performance.
 */
function LocalParticlesBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 2}px`,
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 12 + 10}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div 
      className="particles-container" 
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 1,
        pointerEvents: "none",
        opacity: 0.6
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: "#22c55e", 
            borderRadius: "50%",
            filter: "blur(0.5px)",
            animation: `floatDynamic ${p.duration} linear infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
      <style>{`
        @keyframes floatDynamic {
          0% { transform: translateY(105vh) translateX(0); opacity: 0; }
          15% { opacity: 0.7; }
          85% { opacity: 0.7; }
          100% { transform: translateY(-5vh) translateX(30px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Framer motion variants optimized for beautiful staggered scroll actions
  const fadeInVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <div className="home">

        {/* Floating Navbar */}
        <nav className="navbar">
          <div className="logo">
            <FaGlobeAmericas className="logo-icon" style={{ marginRight: '8px', color: '#22c55e' }} /> 
            TrashTagGo
          </div>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#impact">Impact</a>
            <a href="#leaderboard">Leaderboard</a>
            <a href="#contact">Contact</a>

            {/* Fully wired dynamic dark/light theme trigger */}
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {darkMode ? <FaSun className="theme-icon-toggle" /> : <FaMoon className="theme-icon-toggle" />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source
              src="/videos/hero-video.mp4"
              type="video/mp4"
            />
          </video>

          {/* Bug-free embedded background rendering perfectly */}
          <LocalParticlesBackground />

          <div className="overlay"></div>

          <div className="floating-blur blur1"></div>
          <div className="floating-blur blur2"></div>

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="tag">
              AI Powered Environmental Platform
            </span>

            <h1>
              Transform Trash
              <br />
              <span>Into Impact</span>
            </h1>

            <p>
              A smart sustainability platform connecting
              volunteers, NGOs and communities through
              technology-driven environmental action.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Start Cleanup
              </button>
              <button className="glass-btn">
                Explore Impact Map
              </button>
            </div>

            <div className="hero-metrics">
              <div>
                <h3>10K+</h3>
                <span>Volunteers</span>
              </div>
              <div>
                <h3>5K+</h3>
                <span>Cleanups</span>
              </div>
              <div>
                <h3>25 Tons</h3>
                <span>Waste Removed</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Trusted Section */}
        <section className="trusted">
          <p>Trusted by Colleges, NGOs & Communities</p>
          <div className="trusted-grid">
            <div>NGOs</div>
            <div>Colleges</div>
            <div>Municipalities</div>
            <div>Volunteers</div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <h2>Powerful Features</h2>

          <motion.div 
            className="features-grid-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div className="feature-card" variants={fadeInVariant}>
              <GiRecycle className="feature-icon" />
              <h3>AI Waste Detection</h3>
              <p>Automatically identify waste using AI.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInVariant}>
              <FaMapMarkerAlt className="feature-icon" />
              <h3>GPS Tracking</h3>
              <p>Track cleanup activities in real time.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInVariant}>
              <FaAward className="feature-icon" />
              <h3>GreenCoin Rewards</h3>
              <p>Earn achievements and rewards.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInVariant}>
              <FaChartLine className="feature-icon" />
              <h3>Impact Analytics</h3>
              <p>View environmental impact instantly.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInVariant}>
              <MdOutlineCleaningServices className="feature-icon" />
              <h3>Community Challenges</h3>
              <p>Compete with volunteers and colleges.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInVariant}>
              <FaShieldAlt className="feature-icon" />
              <h3>Disaster Response</h3>
              <p>Coordinate emergency cleanup efforts.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="impact">
          <h2>Environmental Impact</h2>

          <motion.div 
            className="impact-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div className="impact-card" variants={fadeInVariant}>
              <h3>25+</h3>
              <p>Tons of Waste Removed</p>
            </motion.div>

            <motion.div className="impact-card" variants={fadeInVariant}>
              <h3>12K+</h3>
              <p>Community Members</p>
            </motion.div>

            <motion.div className="impact-card" variants={fadeInVariant}>
              <h3>500+</h3>
              <p>Events Organized</p>
            </motion.div>

            <motion.div className="impact-card" variants={fadeInVariant}>
              <h3>3000+</h3>
              <p>GreenCoins Redeemed</p>
            </motion.div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <h2>How It Works</h2>

          <motion.div 
            className="steps"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div className="step" variants={fadeInVariant}>
              <span className="step-number">01</span>
              <h3>Find Location</h3>
            </motion.div>

            <motion.div className="step" variants={fadeInVariant}>
              <span className="step-number">02</span>
              <h3>Upload Before Photo</h3>
            </motion.div>

            <motion.div className="step" variants={fadeInVariant}>
              <span className="step-number">03</span>
              <h3>Complete Cleanup</h3>
            </motion.div>

            <motion.div className="step" variants={fadeInVariant}>
              <span className="step-number">04</span>
              <h3>Earn GreenCoins</h3>
            </motion.div>
          </motion.div>
        </section>

        {/* Final CTA Section */}
        <section className="cta">
          <h2>Ready To Make An Impact?</h2>
          <p>Join the next generation of environmental action.</p>
          <button className="primary-btn">
            Join TrashTagGo
          </button>
        </section>

      </div>
    </div>
  );
}

export default Home;