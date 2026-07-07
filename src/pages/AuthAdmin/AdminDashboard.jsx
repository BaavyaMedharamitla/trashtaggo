import React, { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";

// 1. Only import the sidebar component safely
import AdminSidebar from "../../components/Adminsidebar";

// COMMENTED OUT: Bypassing the broken external chart component entirely to prevent compilation crashes
// import { AnalyticsChart } from "../../components/AnalyticsChart";

// 2. Global design styles mapping
import "../../styles/theme.css";
import "../../styles/Admin.css";

/* 3. LOCAL INDEPENDENT SUBCOMPONENT
  This completely bypasses the teammate's broken Statcard.jsx file 
  and lets you render your own statistics clean and error-free!
*/
function LocalStatCard({ title, value, subtitle }) {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <h2>{value}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function AdminDashboard() {
  // Custom cursor configuration pointers
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
      
      {/* Dynamic Cursor Node Tracking Layer */}
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

      {/* Main Shared Structural Sidebar Component */}
      <AdminSidebar />

      <div className="dashboard-content">
        {/* Header */}
        <div className="dashboard-header">
          <p className="breadcrumb">TrashTagGo / Admin</p>
          <h1>Admin Dashboard</h1>
        </div>

        {/* Stats Cards - Now completely safely powered by LocalStatCard */}
        <div className="stats-grid">
          <LocalStatCard
            title="Total Users"
            value="1,250"
            subtitle="+12% this month"
          />

          <LocalStatCard
            title="Pending Reviews"
            value="45"
            subtitle="Needs attention"
          />

          <LocalStatCard
            title="GreenCoins Distributed"
            value="12,500"
            subtitle="+340 today"
          />

          <LocalStatCard
            title="Waste Removed"
            value="850 KG"
            subtitle="+20 KG today"
          />
        </div>

        {/* Weekly Cleanup Activity - Pure CSS Bar Chart Placeholder */}
        <div className="dashboard-card activity-card">
          <h2>Weekly Cleanup Activity</h2>
          
          {/* Integrated CSS fallback chart layout */}
          <div style={{ 
            display: "flex", 
            alignItems: "flex-end", 
            justifyContent: "space-between", 
            height: "180px", 
            padding: "20px 10px 10px 10px",
            background: "rgba(255, 255, 255, 0.02)",
            borderRadius: "12px",
            margin: "20px 0"
          }}>
            {[
              { day: "Mon", val: "45%" },
              { day: "Tue", val: "60%" },
              { day: "Wed", val: "35%" },
              { day: "Thu", val: "75%" },
              { day: "Fri", val: "50%" },
              { day: "Sat", val: "90%" },
              { day: "Sun", val: "100%" }
            ].map((d, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                <div style={{ 
                  height: d.val, 
                  width: "22px", 
                  background: "linear-gradient(to top, var(--accent-brand, #22c55e), #4ade80)", 
                  borderRadius: "6px 6px 0 0",
                  animation: "growBarChart 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards"
                }} />
                <span style={{ fontSize: "0.75rem", marginTop: "8px", opacity: 0.6 }}>{d.day}</span>
              </div>
            ))}
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

        {/* Bottom Section */}
        <div className="bottom-grid">
          {/* Top Contributors */}
          <div className="dashboard-card">
            <h2>Top Contributors</h2>

            <div className="list-item">
              <span>🥇 Ravi</span>
              <span>1250 Coins</span>
            </div>

            <div className="list-item">
              <span>🥈 Priya</span>
              <span>1120 Coins</span>
            </div>

            <div className="list-item">
              <span>🥉 Akash</span>
              <span>980 Coins</span>
            </div>
          </div>

          {/* Pending Reviews */}
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

        {/* Recent Activity */}
        <div className="dashboard-card">
          <h2>Recent Activity</h2>

          <div className="activity-item">
            Ravi completed Beach Cleanup • 2 min ago
          </div>

          <div className="activity-item">
            Priya earned 150 GreenCoins • 5 min ago
          </div>

          <div className="activity-item">
            Akash submitted cleanup photos • 12 min ago
          </div>

          <div className="activity-item">
            20 KG waste removed today • 1 hour ago
          </div>
        </div>

        {/* Environmental Impact */}
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

        {/* Quick Actions */}
        <div className="dashboard-card">
          <h2>Quick Actions</h2>

          <div className="quick-actions">
            <button className="quick-btn">Manage Users</button>
            <button className="quick-btn">Verify Submissions</button>
            <button className="quick-btn">Analytics</button>
            <button className="quick-btn">Export Report</button>
          </div>
        </div>
      </div>

      {/* Smooth CSS Bar Grow Transitions */}
      <style>{`
        @keyframes growBarChart {
          from { height: 0; }
        }
      `}</style>
    </div>
  );
}

export default AdminDashboard;