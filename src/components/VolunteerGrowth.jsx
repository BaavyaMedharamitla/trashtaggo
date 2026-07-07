function VolunteerGrowth() {
  const data = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 210 },
    { month: "Mar", users: 350 },
    { month: "Apr", users: 480 },
    { month: "May", users: 650 },
    { month: "Jun", users: 820 },
  ];

  return (
    <div className="dashboard-card">
      <h2>Volunteer Growth</h2>

      <div className="growth-chart">
        {data.map((item, index) => (
          <div
            key={index}
            className="growth-bar-wrapper"
          >
            <small>{item.users}</small>

            <div
              className="growth-bar"
              style={{
                height: `${item.users / 10}px`,
              }}
            ></div>

            <span>{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteerGrowth;