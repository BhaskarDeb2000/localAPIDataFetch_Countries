import React from "react";
import { Typography, CardContent, Card } from "@mui/material";
import Cities from "./Cities";
const Countries = ({ stateName, cities }) => {
  return (
    <Card sx={{ marginBottom: 2, width: "600px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {stateName}
        </Typography>
        <Cities Cities={cities} />
      </CardContent>
    </Card>
  );
};

export default Countries;
