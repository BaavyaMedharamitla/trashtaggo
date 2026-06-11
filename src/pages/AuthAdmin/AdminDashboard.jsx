import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaLeaf } from "react-icons/fa";

// Pointing explicitly to your styling sheets based on your file explorer tree
import "../../styles/theme.css"; 
import "../../styles/admin.css";

function AdminDashboard() {
  const { theme, toggleTheme } = useTheme();
  
  // Custom interactive tracking elements for the green leaf cursor pointer
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll("a, button, .stat-card, .dashboard-card, .quick-btn");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    const timeoutId = setTimeout(addHoverListeners, 500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    // Dynamic class binding ensures colors toggle seamlessly between light/dark themes
    <div className={`admin-dashboard theme-${theme || "dark"}`}>
      
      {/* Custom Interactive Leaf Cursor Node Component */}
      <div 
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          position: "fixed",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 10001,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px"
        }}
      >
        <div style={{ 
          color: "var(--accent-brand, #22c55e)",
          transform: isHovered ? "rotate(25deg) scale(1.1)" : "rotate(0deg) scale(1)",
          transition: "transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}>
          <FaLeaf size={16} />
        </div>
        <div style={{
          width: "4px",
          height: "4px",
          backgroundColor: isHovered ? "var(--accent-brand, #22c55e)" : "var(--text-primary, #ffffff)",
          borderRadius: "50%",
          transition: "transform 0.2s ease"
        }} />
      </div>

      {/* Sidebar Layout Core Anchor Grid */}
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <FaLeaf className="leaf-logo" />
            <h2>TrashTagGo</h2>
          </div>
          {/* Interactive theme icon button switcher toggling layout states */}
          <button onClick={toggleTheme} className="theme-icon-btn" aria-label="Toggle Theme">
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>

        <div className="sidebar-menu">
          <Link to="/admin">Dashboard Overview</Link>
          <Link to="/admin">Pending Submissions</Link>
          <Link to="/admin">User Management</Link>
          <Link to="/admin">Global Analytics</Link>
          <Link to="/">Back to Home</Link>
        </div>
      </div>

      {/* Main Structural Dashboard Window Workspace Workspace */}
      <div className="dashboard-content">
        
        {/* Header Title Section */}
        <div className="dashboard-header">
          <p className="breadcrumb">TrashTagGo / Admin</p>
          <h1>Admin Dashboard</h1>
        </div>

        {/* Dynamic Analytics Quantities Showcase Row */}
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Total Users</h4>
            <h2>1,250</h2>
            <p>+12% this month</p>
          </div>

          <div className="stat-card">
            <h4>Pending Reviews</h4>
            <h2>45</h2>
            <p style={{ color: "#ef4444" }}>Needs attention</p>
          </div>

          <div className="stat-card">
            <h4>GreenCoins Distributed</h4>
            <h2>12,500</h2>
            <p>+340 today</p>
          </div>

          <div className="stat-card">
            <h4>Waste Removed</h4>
            <h2>850 KG</h2>
            <p>+20 KG today</p>
          </div>
        </div>

        {/* Weekly Progress Overview Monitoring Display Card */}
        <div className="dashboard-card">
          <h2>Weekly Cleanup Activity</h2>
          
          <div className="chart-placeholder">
            <h3>Chart Data Visualizer Pipeline Loading...</h3>
          </div>

          <div className="chart-summary">
            <div>
              <h3>170</h3>
              <p>Total Cleanups</p>
            </div>
            <div>
              <h3>24</h3>
              <p>Daily Average</p>
            </div>
            <div>
              <h3>Sunday</h3>
              <p>Most Active Day</p>
            </div>
          </div>
        </div>

        {/* Double Column Splitting Context Grid */}
        <div className="bottom-grid">
          
          {/* Top Contributor Ranking Logs */}
          <div className="dashboard-card">
            <h2>Top Contributors</h2>
            <div className="list-item">
              <span>🥇 Ravi</span>
              <span>1,250 Coins</span>
            </div>
            <div className="list-item">
              <span>🥈 Priya</span>
              <span>1,120 Coins</span>
            </div>
            <div className="list-item">
              <span>🥉 Akash</span>
              <span>980 Coins</span>
            </div>
          </div>

          {/* Verification Request Action Queue Line items */}
          <div className="dashboard-card">
            <h2>Pending Reviews</h2>
            <div className="review-item">
              <span>Beach Cleanup</span>
              <button className="quick-btn" style={{ padding: "8px 16px", fontSize: "0.85rem", width: "auto" }}>Review</button>
            </div>
            <div className="review-item">
              <span>Park Cleanup</span>
              <button className="quick-btn" style={{ padding: "8px 16px", fontSize: "0.85rem", width: "auto" }}>Review</button>
            </div>
            <div className="review-item">
              <span>Plastic Collection</span>
              <button className="quick-btn" style={{ padding: "8px 16px", fontSize: "0.85rem", width: "auto" }}>Review</button>
            </div>
          </div>

        </div>

        {/* Recent Real-time Operational Stream Activities */}
        <div className="dashboard-card">
          <h2>Recent Activity</h2>
          <div className="activity-item">Ravi completed Beach Cleanup • 2 min ago</div>
          <div className="activity-item">Priya earned 150 GreenCoins • 5 min ago</div>
          <div className="activity-item">Akash submitted cleanup photos • 12 min ago</div>
          <div className="activity-item">20 KG waste removed today • 1 hour ago</div>
        </div>

        {/* Ecological Cumulative Overview Breakdown Metrics */}
        <div className="dashboard-card">
          <h2>Environmental Impact</h2>
          <div className="list-item">
            <span>Plastic Recycled</span>
            <span>520 KG</span>
          </div>
          <div className="list-item">
            <span>Trees Saved</span>
            <span>120</span>
          </div>
          <div className="list-item">
            <span>CO₂ Reduced</span>
            <span>240 KG</span>
          </div>
          <div className="list-item">
            <span>Community Cleanups</span>
            <span>850</span>
          </div>
        </div>

        {/* Fast Action Executive Directives Controls Module */}
        <div className="dashboard-card">
          <h2>Quick Actions</h2>
          <div className="quick-actions" style={{ marginTop: "1rem" }}>
            <button className="quick-btn">Manage Users</button>
            <button className="quick-btn">Verify Submissions</button>
            <button className="quick-btn">Analytics</button>
            <button className="quick-btn">Export Report</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;