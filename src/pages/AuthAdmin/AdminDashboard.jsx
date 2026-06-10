import React from "react";

function AdminDashboard() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "10px" }}>Admin Control Layer</h1>
      <p style={{ color: "var(--text-secondary)" }}>Manage verified ecological reports, multi-party audits, and coin distribution protocols.</p>
      <div className="glass-card" style={{ padding: "30px", marginTop: "30px" }}>
        <h3>Pending Verification Queue</h3>
        <p style={{ color: "var(--text-secondary)", marginTop: "10px" }}>All cleanups are currently audited and verified.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;