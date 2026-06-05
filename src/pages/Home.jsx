import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Transform Trash Into Impact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join thousands of volunteers creating cleaner and greener
            communities.
          </motion.p>

          <div className="hero-buttons">
            <button>Start Cleanup</button>
            <button className="secondary-btn">Explore Impact Map</button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
        <div className="stat-card">
          <h2>10,000+</h2>
          <p>Volunteers</p>
        </div>

        <div className="stat-card">
          <h2>5,000+</h2>
          <p>Cleanups</p>
        </div>

        <div className="stat-card">
          <h2>25 Tons</h2>
          <p>Waste Removed</p>
        </div>

        <div className="stat-card">
          <h2>50,000</h2>
          <p>GreenCoins Earned</p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why TrashTagGo?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>AI Waste Detection</h3>
            <p>Automatically identify waste from uploaded images.</p>
          </div>

          <div className="feature-card">
            <h3>GPS Cleanup Tracking</h3>
            <p>Track cleanup locations in real time.</p>
          </div>

          <div className="feature-card">
            <h3>GreenCoin Rewards</h3>
            <p>Earn rewards for community contributions.</p>
          </div>

          <div className="feature-card">
            <h3>Community Challenges</h3>
            <p>Compete and collaborate with volunteers.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <h3>Find Location</h3>
          </div>

          <div className="step">
            <span>2</span>
            <h3>Upload Before Photo</h3>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Clean Area</h3>
          </div>

          <div className="step">
            <span>4</span>
            <h3>Earn Rewards</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;