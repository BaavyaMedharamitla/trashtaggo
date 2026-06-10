import React from "react";

function Rewards() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "800" }}>Rewards Marketplace</h1>
      <p style={{ color: "var(--text-secondary)" }}>Redeem your verified GreenCoins for premium eco-products and partner gifts.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", marginTop: "30px" }}>
        <div className="glass-card" style={{ padding: "25px" }}>
          <h3>Eco Water Flask</h3>
          <p style={{ color: "var(--text-secondary)", margin: "10px 0 20px" }}>Stainless steel solar-insulated flask.</p>
          <button className="primary-btn">50 GreenCoins</button>
        </div>
      </div>
    </div>
  );
}

export default Rewards;