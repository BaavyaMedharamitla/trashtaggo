import React from "react";

function Leaderboard() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "30px" }}>Regional Leaderboard</h1>
      <div className="glass-card" style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "15px 10px", borderBottom: "1px solid var(--border-color)" }}>
          <span>1. Alex Rivers</span>
          <span style={{ color: "var(--accent-brand)", fontWeight: "600" }}>2,450 KG</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "15px 10px" }}>
          <span>2. GreenTeam Corp</span>
          <span style={{ color: "var(--accent-brand)", fontWeight: "600" }}>1,980 KG</span>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;