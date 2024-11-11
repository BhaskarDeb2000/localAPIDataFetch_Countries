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

  const filterData = country.filter((stateName) => {
    return stateName.cities.some((cityName) =>
      cityName.city.toLowerCase().includes(search.toLowerCase())
    );
  });

  const filterState = country.filter((searchState) =>
    searchState.state.toLowerCase().includes(search.toLowerCase())
  );

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
        filterState.map((i, countryIndex) => (
          <div style={{ marginBottom: 30 }} key={countryIndex}>
            <Countries stateName={i.state} cities={i.cities} />
          </div>
        ))
      )}
    </Container>
  );
}

export default App;
