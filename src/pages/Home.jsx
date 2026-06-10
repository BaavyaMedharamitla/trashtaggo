import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Local component layouts
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Icon toolkit configurations
import { FaMapMarkerAlt, FaChartLine, FaAward, FaShieldAlt, FaLeaf } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GiRecycle } from "react-icons/gi";

// Local layout definitions
import "../styles/Home.css";

/**
 * Renders the floating particle background overlaying the hero viewport canvas.
 * Spawns an organic mix of slow-drifting leaves and glowing environmental energy nodes.
 */
function LocalParticlesBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => {
      const isLeaf = Math.random() > 0.4; // 60% leaves, 40% ambient light dots
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: isLeaf ? `${Math.random() * 14 + 10}px` : `${Math.random() * 4 + 2}px`,
        delay: `${Math.random() * -20}s`, // Negative delay bypasses entry stutters on initial page paint
        duration: `${Math.random() * 15 + 15}s`,
        rotation: `${Math.random() * 360}deg`,
        driftX: Math.random() * 60 - 30,
        isLeaf
      };
    });
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
        opacity: 0.5
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            fontSize: p.isLeaf ? p.size : 'auto',
            width: !p.isLeaf ? p.size : 'auto',
            height: !p.isLeaf ? p.size : 'auto',
            color: p.isLeaf ? "var(--accent-brand)" : "transparent",
            backgroundColor: !p.isLeaf ? "var(--accent-primary)" : "transparent",
            borderRadius: !p.isLeaf ? "50%" : "0%",
            filter: !p.isLeaf ? "blur(1px)" : "none",
            transform: `rotate(${p.rotation})`,
            animation: `floatDynamicLeaf ${p.duration} linear infinite`,
            animationDelay: p.delay,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            "--drift-x": `${p.driftX}px`
          }}
        >
          {p.isLeaf && <FaLeaf />}
        </span>
      ))}
      <style>{`
        @keyframes floatDynamicLeaf {
          0% { transform: translateY(105vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-10vh) translateX(var(--drift-x)) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function Home() {
  // Page-scroll monitoring rules for structural timeline indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Custom coordinate structures tracking dual-layer hover modules
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const trailRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    // Frame loops processing smooth linear interpolation delays for trailing particles
    let animationFrameId;
    const updateTrailPhysics = () => {
      const targetX = window.innerWidth > 1024 ? parseFloat(document.documentElement.style.getPropertyValue("--mouse-x")) || 0 : 0;
      const targetY = window.innerHeight > 1024 ? parseFloat(document.documentElement.style.getPropertyValue("--mouse-y")) || 0 : 0;

      trailRef.current.x += (targetX - trailRef.current.x) * 0.08;
      trailRef.current.y += (targetY - trailRef.current.y) * 0.08;

      setTrailPos({ x: trailRef.current.x, y: trailRef.current.y });
      animationFrameId = requestAnimationFrame(updateTrailPhysics);
    };

    // Attaches interaction alerts to operational tags
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll("a, button, .feature-card, .trusted-glass-tag");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(updateTrailPhysics);
    
    const timeoutId = setTimeout(addHoverListeners, 500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

  // Structural animation configurations used across sub-elements
  const fadeInVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="home-landing-wrapper">
      {/* 1. Scroll Timeline Accent Tracking Block */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* 2. Custom Cursor Elements - Centered on target point */}
      <div 
        className={`custom-cursor-ring ${isHovered ? "cursor-expand-active" : ""}`}
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`,
          position: "fixed",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 10000,
          transition: "transform 0.1s ease-out, width 0.2s, height 0.2s"
        }}
      />
      
      {/* 3. Mouse Ambient Dot and Leaf Cursor Effect */}
      <div 
        className="mouse-cursor-wrapper"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          position: "fixed",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 10001, // Position on top of other cursor elements
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2px" // Add small gap to separate leaf and dot
        }}
      >
        <div style={{ color: "var(--accent-brand)" }}>
          <FaLeaf size={20} />
        </div>
        <div 
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: isHovered ? "var(--accent-primary)" : "#ffffff", // Use accent color when hovering, otherwise white
            borderRadius: "50%",
            transition: "background-color 0.2s ease" // Smooth color transition on hover
          }}
        />
      </div>

      {/* REMOVED: Leaf trail component with glow effect */}
      {/* <div 
        className={`custom-cursor-leaf-trail ${isHovered ? "trail-hover-state" : ""}`}
        style={{ 
          left: `${trailPos.x}px`, 
          top: `${trailPos.y}px`,
          position: "fixed",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FaLeaf />
      </div> */}

      {/* REMOVED: Deep-Core Mouse Glow Radial Background spotlight */}
      {/* <div className="mouse-glow"></div> */}

      <Navbar />

      {/* Hero Presentation Canvas Area */}
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <LocalParticlesBackground />

        <div className="overlay"></div>
        <div className="floating-blur blur1"></div>
        <div className="floating-blur blur2"></div>

        <div className="hero-split-wrapper">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="tag">AI Powered Environmental Platform</span>
            <h1>
              Transform Trash <br />
              <span>Into Impact</span>
            </h1>
            <p>
              A smart sustainability ecosystem bridging volunteers, local environmental 
              NGOs, and civic agencies through secure, data-validated green technology.
            </p>

            <div className="hero-buttons">
              <Link to="/submission" className="primary-btn">Start Cleanup</Link>
              <Link to="/map" className="glass-btn">Explore Impact Map</Link>
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
                <span>Waste Diverted</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-preview"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="glass-card visual-metric-card">
              <div className="live-pulse-dot"></div>
              <h4>Live Impact Stream</h4>
              <p>Verified Collection Today</p>
              <h2>1,245 KG</h2>
              
              <div className="mini-graph-placeholder">
                <div className="bar entry-1" style={{ height: '35%' }}></div>
                <div className="bar entry-2" style={{ height: '60%' }}></div>
                <div className="bar entry-3" style={{ height: '45%' }}></div>
                <div className="bar entry-4" style={{ height: '80%' }}></div>
                <div className="bar entry-5" style={{ height: '95%' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alliance Trust Metrics Grid */}
      <section className="trusted">
        <p>Partnering With Leading Institutions, NGO Alliances & Smart Cities</p>
        <div className="trusted-grid">
          <div className="trusted-glass-tag">Environmental NGOs</div>
          <div className="trusted-glass-tag">Global Universities</div>
          <div className="trusted-glass-tag">Smart Cities Initiatives</div>
          <div className="trusted-glass-tag">Volunteer Communities</div>
        </div>
      </section>

      {/* Custom Core Feature Showcase catalog */}
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
            <h3>AI Waste Classification</h3>
            <p>Automatically identify material types, hazard indexes, and mass estimation models using computer vision.</p>
          </motion.div>

          <motion.div className="feature-card" variants={fadeInVariant}>
            <FaMapMarkerAlt className="feature-icon" />
            <h3>Real-Time Geospatial Tracking</h3>
            <p>Log verified geofenced points coordinates directly onto interactive maps for regional authorities.</p>
          </motion.div>

          <motion.div className="feature-card" variants={fadeInVariant}>
            <FaAward className="feature-icon" />
            <h3>GreenCoin Ecosystem</h3>
            <p>Earn cryptographically secure tokens upon multi-party verification to exchange in our reward hub.</p>
          </motion.div>

          <motion.div className="feature-card" variants={fadeInVariant}>
            <FaChartLine className="feature-icon" />
            <h3>Analytics Dashboard</h3>
            <p>Track scope metrics, aggregate garbage density indexes, and generation records cleanly over time.</p>
          </motion.div>

          <motion.div className="feature-card" variants={fadeInVariant}>
            <MdOutlineCleaningServices className="feature-icon" />
            <h3>Community Campaigns</h3>
            <p>Launch targeted environmental cleaning quests alongside regional corporate sponsors and colleges.</p>
          </motion.div>

          <motion.div className="feature-card" variants={fadeInVariant}>
            <FaShieldAlt className="feature-icon" />
            <h3>Incident Management</h3>
            <p>Deploy localized response alerts in case of illegal dump finding or ecological disasters.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Metric Visualizations & Operations Reports Layout */}
      <section id="impact" className="impact">
        <h2>Global Cumulative Impact</h2>
        <motion.div 
          className="impact-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="impact-card" variants={fadeInVariant}>
            <h3>25+</h3>
            <p>Metric Tons Recovered</p>
          </motion.div>
          <motion.div className="impact-card" variants={fadeInVariant}>
            <h3>12K+</h3>
            <p>Registered Nodes</p>
          </motion.div>
          <motion.div className="impact-card" variants={fadeInVariant}>
            <h3>500+</h3>
            <p>Executed Deployments</p>
          </motion.div>
          <motion.div className="impact-card" variants={fadeInVariant}>
            <h3>3000+</h3>
            <p>GreenCoins Distributed</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Operational Flow Metrics Overview Timeline */}
      <section className="how-it-works">
        <h2>Operational Workflow</h2>
        <motion.div 
          className="steps"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="step" variants={fadeInVariant}>
            <span className="step-number">01</span>
            <h3>Geolocate Area</h3>
          </motion.div>
          <motion.div className="step" variants={fadeInVariant}>
            <span className="step-number">02</span>
            <h3>Log Before Metrics</h3>
          </motion.div>
          <motion.div className="step" variants={fadeInVariant}>
            <span className="step-number">03</span>
            <h3>Execute Cleanup</h3>
          </motion.div>
          <motion.div className="step" variants={fadeInVariant}>
            <span className="step-number">04</span>
            <h3>Claim Network Coins</h3>
          </motion.div>
        </motion.div>
      </section>

      {/* Retention Marketing Action Block */}
      <section className="cta">
        <h2>Ready To Drive True Impact?</h2>
        <p>Integrate your community nodes into our environmental intelligence infrastructure today.</p>
        <Link to="/register" className="primary-btn inline-block-btn">Create Free Account</Link>
      </section>

      <Footer />
    </div>
  );
}

export default Home;