import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Container, Typography } from "@mui/material";

import Countries from "./Components/Countries";
import Error from "./Components/Error";
import Loading from "./Components/Loading";

function App() {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          "https://local-api-data-fetch-countries-backend.vercel.app/cities"
        );
        setCountry(response.data.country);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
  }, []);
  /* Nested Array filter */
  //const filterData = country.filter((stateName) => {
  //  return stateName.cities.some((cityName) =>
  //    cityName.city.toLowerCase().includes(search.toLowerCase())
  //  );
  //});

  const filterCountry = country.filter((searchCountry) =>
    searchCountry.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "#1F2933",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          padding: "30px",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#1F2933",
        }}
      >
        <Typography>
          <h1 style={{ color: "white" }}>Welcome to the Country Page!</h1>
        </Typography>
        <TextField
          onChange={(prevValue) => setSearch(prevValue.target.value)}
          style={{
            marginBottom: "30px",
            width: "100%",
            maxWidth: "640px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          id="filled-search"
          label="Type here to search"
          value={search}
          type="search"
          variant="filled"
          InputProps={{
            style: {
              padding: "3px 20px",
              fontSize: "1rem",
            },
          }}
          InputLabelProps={{
            style: {
              color: "#888888",
            },
          }}
        />
        {error ? (
          <Error error={error} />
        ) : loading ? (
          <Loading />
        ) : (
          filterCountry?.map((i, countryIndex) => (
            <div
              style={{
                marginBottom: "20px",
                padding: "20px",
                width: "100%",
                maxWidth: "600px",
                backgroundColor: "#f1f1f1",
                borderRadius: "8px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                ":hover": {
                  transform: "scale(1.02)",
                },
              }}
              key={countryIndex}
            >
              <Countries countryName={i.country} cities={i.cities} />
            </div>
          ))
        )}
      </Container>
    </div>
  );
}

export default App;
