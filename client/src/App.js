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
        const response = await axios.get("http://localhost:5002/cities");
        setCountry(response.data.country);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
  }, []);

  console.log({ search });

  const filterData = country.filter((countryName) => {
    return countryName.cities.some((cityName) =>
      cityName.city.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <Container maxWidth="xl">
      <TextField
        onChange={(prevValue) => setSearch(prevValue.target.value)}
        style={{ marginBottom: 30 }}
        id="filled-search"
        label="Search field"
        value={search}
        type="search"
        variant="filled"
      />
      {error ? (
        <Error error={error} />
      ) : loading ? (
        <Loading />
      ) : (
        filterData.map((i, countryIndex) => (
          <div style={{ marginBottom: 30 }}>
            <Countries
              key={countryIndex}
              stateName={i.State}
              cities={i.cities}
            />
          </div>
        ))
      )}
    </Container>
  );
}

export default App;
