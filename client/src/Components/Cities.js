import React from "react";
import { Typography } from "@mui/material";

const Cities = ({ Cities }) => {
  return (
    <div>
      {Cities.map((cityName, cityIndex) => (
        <div key={cityIndex}>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            City: {cityName.city}
          </Typography>
          <Typography variant="body2">
            Population:
            {cityName.population}
          </Typography>
        </div>
      ))}
    </div>
  );
};
export default Cities;
