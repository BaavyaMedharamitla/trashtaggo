import React from "react";

function SubmissionForm() {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "10px" }}>Log Cleanup Mission</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>Upload coordinates and media files for AI verification models.</p>
      <form className="glass-card" style={{ padding: "35px", display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={(e) => e.preventDefault()}>
        <div>
          <label style={{ display: "block", marginBottom: "8px" }}>Location Coordinates</label>
          <input type="text" placeholder="Auto-fetching GPS..." style={{ width: "100%", padding: "12px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border-color)", borderRadius: "8px", color: "white" }} />
        </div>
        <button className="primary-btn" type="submit">Submit for Verification</button>
      </form>
    </div>
  );
}

export default SubmissionForm;