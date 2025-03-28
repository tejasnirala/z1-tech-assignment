import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>5-Day Forecast</h2>
      {forecast.length === 0 && <p>No data available</p>}

      <div style={styles.forecastContainer}>
        {forecast.slice(0, 5).map((item, index) => (
          <div key={index} style={styles.forecastCard}>
            <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <p>🌡 Temp: {item.main.temp}°C</p>
            <p>{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  forecastContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "10px",
  },
  forecastCard: {
    backgroundColor: "#e3f2fd",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
    minWidth: "120px",
    textAlign: "center",
  },
};

export default Forecast;
