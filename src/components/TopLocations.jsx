function TopLocations() {
  const locations = [
    {
      place: "Marina Beach",
      cleanups: 120,
    },
    {
      place: "Cubbon Park",
      cleanups: 95,
    },
    {
      place: "Lalbagh",
      cleanups: 82,
    },
    {
      place: "Besant Nagar",
      cleanups: 75,
    },
  ];

  return (
    <div className="dashboard-card">
      <h2>Top Cleanup Locations</h2>

      {locations.map((location, index) => (
        <div
          key={index}
          className="location-row"
        >
          <span>{location.place}</span>

          <strong>
            {location.cleanups}
          </strong>
        </div>
      ))}
    </div>
  );
}

export default TopLocations;