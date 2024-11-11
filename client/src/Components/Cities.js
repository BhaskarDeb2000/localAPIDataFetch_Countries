import React from "react";
import { Typography, Box, Card } from "@mui/material";

const Cities = ({ Cities }) => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "text.secondary",
            marginBottom: "10px",
          }}
        >
          Cities:
        </Typography>

        {Cities.map((cityData, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 1,
              padding: "10px",
              backgroundColor: "#73879a",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
              WebkitTextFillColor: "#000000",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: "#3b3b3b",
              }}
            >
              {cityData.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
              }}
            >
              Population: {cityData.population}
            </Typography>
          </Card>
        ))}
      </Box>
    </div>
  );
};
export default Cities;
