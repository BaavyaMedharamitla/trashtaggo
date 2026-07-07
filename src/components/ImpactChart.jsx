function ImpactChart() {
  return (
    <div className="dashboard-card">
      <h2>Environmental Impact</h2>

      <div className="impact-circle">
        <div className="impact-center">
          <h3>520 KG</h3>
          <p>Waste Removed</p>
        </div>
      </div>

      <div className="impact-stats">

        <div className="impact-row">
          <div>
            <span>Plastic Waste</span>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>

          <strong>60%</strong>
        </div>

        <div className="impact-row">
          <div>
            <span>Organic Waste</span>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>

          <strong>25%</strong>
        </div>

        <div className="impact-row">
          <div>
            <span>Metal Waste</span>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "15%" }}
              ></div>
            </div>
          </div>

          <strong>15%</strong>
        </div>

      </div>
    </div>
  );
}

export default ImpactChart;