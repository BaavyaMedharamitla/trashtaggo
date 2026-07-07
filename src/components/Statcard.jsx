import { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";

// Component Imports - Matching your exact sidebar, cards, and charts from the screenshot
import Adminsidebar from "../../components/Adminsidebar";
import Statcard from "../../components/Statcard";
import AnalyticsChart from "../../components/AnalyticsChart";

// Style Sheets
import "../../styles/theme.css"; 
import "../../styles/admin.css";

function AdminDashboard() {
  // Custom interactive green leaf cursor logic
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
    <div className="admin-dashboard">
      
      {/* Integrated Interactive Custom Leaf Pointer */}
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

      {/* 1. Sidebar Navigation Component */}
      <Adminsidebar />

      {/* 2. Main Dashboard Window Workspace */}
      <div className="dashboard-content">
        
        {/* Header Block */}
        <div className="dashboard-header">
          <p className="breadcrumb">TrashTagGo / Admin</p>
          <h1>Admin Dashboard</h1>
        </div>

        {/* 3. Modular Stats Grid Layout */}
        <div className="stats-grid">
          <Statcard title="Total Users" value="1,250" subtitle="+12% this month" />
          <Statcard title="Pending Reviews" value="45" subtitle="Needs attention" />
          <Statcard title="GreenCoins Distributed" value="12,500" subtitle="+340 today" />
          <Statcard title="Waste Removed" value="850 KG" subtitle="+20 KG today" />
        </div>

        {/* 4. Chart Showcase Container */}
        <div className="dashboard-card">
          <h2>Weekly Cleanup Activity</h2>
          {/* Using your real interactive chart component */}
          <AnalyticsChart /> 
        </div>

        {/* Splitting Bottom Sections Grid */}
        <div className="bottom-grid">
          
          {/* Top Contributor Logs */}
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

          {/* Verification Requests Pipeline */}
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

        {/* Event Streaming Log Ledger */}
        <div className="dashboard-card">
          <h2>Recent Activity</h2>
          <div className="activity-item">Ravi completed Beach Cleanup • 2 min ago</div>
          <div className="activity-item">Priya earned 150 GreenCoins • 5 min ago</div>
          <div className="activity-item">Akash submitted cleanup photos • 12 min ago</div>
          <div className="activity-item">20 KG waste removed today • 1 hour ago</div>
        </div>

        {/* Fast Action Controls Module */}
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