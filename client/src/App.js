import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, CardContent, Card } from "@mui/material";

function App() {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get("http://localhost:5002/cities");
        setCountry(response.data.country);
      } catch (error) {
        setError(error);
      }
    };
    fetchCountry();
  }, []);

  return (
    <div className="App">
      {error ? (
        <h1>{error.message}</h1>
      ) : (
        country.map((i, countryIndex) => (
          <Card key={countryIndex} sx={{ marginBottom: 2, width: "300px" }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Country:
              </Typography>
              <Typography variant="h5" component="div">
                {i.State}
              </Typography>
              {i.cities.map((city, cityIndex) => (
                <div key={cityIndex}>
                  <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    City: {city.city}
                  </Typography>
                  <Typography variant="body2">
                    Population:
                    {city.population}
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}

export default App;
