import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Container } from "@mui/material";

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

  const filterState = country.filter((searchState) =>
    searchState.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container
      maxWidth="xl"
      style={{
        padding: "30px",
        backgroundColor: "#f9fafc",
        borderRadius: "12px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        onChange={(prevValue) => setSearch(prevValue.target.value)}
        style={{
          marginBottom: "30px",
          width: "80%",
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        id="filled-search"
        label="Search..."
        value={search}
        type="search"
        variant="filled"
        InputProps={{
          style: {
            padding: "10px 12px",
            fontSize: "1rem",
          },
        }}
        InputLabelProps={{
          style: {
            color: "#999999",
          },
        }}
      />
      {error ? (
        <Error error={error} />
      ) : loading ? (
        <Loading />
      ) : (
        filterState.map((i, countryIndex) => (
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
            <Countries stateName={i.state} cities={i.cities} />
          </div>
        ))
      )}
    </Container>
  );
}

export default App;
