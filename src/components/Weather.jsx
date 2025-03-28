import React, { useState } from "react";
import axios from "axios";

const Weather = ({ setForecast }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "a2f3dbe22a619a271c0332461529f073"; // Replace with your actual API key

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
      fetchForecast(city);
    } catch (err) {
      setError("City not found!");
    }
    setLoading(false);
  };

  const fetchForecast = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      setForecast(response.data.list);
    } catch (err) {
      console.error("Error fetching forecast:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Weather Dashboard</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <button onClick={fetchWeather} style={styles.button}>
          Get Weather
        </button>
      </div>

      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {weather && (
        <div style={styles.weatherCard}>
          <h3>{weather.name}</h3>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>☁ Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "200px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  loading: {
    color: "gray",
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
  weatherCard: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "10px",
    display: "inline-block",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
};

export default Weather;
