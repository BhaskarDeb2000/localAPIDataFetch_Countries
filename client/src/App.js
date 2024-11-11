import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Countries from "./Components/Countries";

import Error from "./Components/Error";
import Loading from "./Components/Loading";

function App() {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="App">
      {error ? (
        <Error error={error} />
      ) : loading ? (
        <Loading />
      ) : (
        country.map((i, countryIndex) => (
          <div>
            <Countries
              key={countryIndex}
              stateName={i.State}
              cities={i.cities}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
