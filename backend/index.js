import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());

const countries = [
  {
    state: "USA",ç
    cities: [
      { city: "New York", population: 8419000 },
      { city: "Los Angeles", population: 3980000 },
    ],
  },
  {
    state: "Canada",
    cities: [
      { city: "Toronto", population: 2730000 },
      { city: "Vancouver", population: 631000 },
    ],
  },
];

app.get("/cities", (req, res) => {
  try {
    res.json({
      country: countries,
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running as: http://localhost:${PORT}`);
});
