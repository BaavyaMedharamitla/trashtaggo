import React from "react";

function Dashboard() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "800" }}>Volunteer Dashboard</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "30px" }}>
        <div className="glass-card" style={{ padding: "24px" }}>
          <h4>My GreenCoins</h4>
          <h2>140.50 GNC</h2>
        </div>
        <div className="glass-card" style={{ padding: "24px" }}>
          <h4>Cleanups Logged</h4>
          <h2>12 Verified</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;