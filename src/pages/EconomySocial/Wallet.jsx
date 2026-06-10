import React from "react";

function Wallet() {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <div className="glass-card" style={{ padding: "35px", textAlign: "center" }}>
        <h4>Cryptographic GreenWallet</h4>
        <h1 style={{ fontSize: "3rem", margin: "20px 0", color: "var(--accent-brand)" }}>450.00 GNC</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", wordBreak: "break-all" }}>
          Public Hash: 0x71C...B29a
        </p>
      </div>
    </div>
  );
}

export default Wallet;