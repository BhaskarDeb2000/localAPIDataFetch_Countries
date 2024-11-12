import React from "react";
import { Typography, CardContent, Card } from "@mui/material";
import Cities from "./Cities";
const Countries = ({ countryName, cities }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {countryName}
        </Typography>
        <Cities Cities={cities} />
      </CardContent>
    </Card>
  );
};

export default Countries;
