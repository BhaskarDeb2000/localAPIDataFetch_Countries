import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());

const countries = [
  {
    country: "USA",
    cities: [
      { city: "New York", population: "8,097,282" },
      { city: "Los Angeles", population: "3,795,936" },
      { city: "Chicago", population: "2,638,159" },
      { city: "Houston", population: "2,319,119" },
      { city: "Phoenix", population: "1,680,992" },
    ],
  },
  {
    country: "Canada",
    cities: [
      { city: "Toronto", population: "6,431,430" },
      { city: "Montreal", population: "4,341,640" },
      { city: "Vancouver", population: "2,682,510" },
      { city: "Calgary", population: "1,336,000" },
      { city: "Edmonton", population: "1,010,899" },
    ],
  },
  {
    country: "UK",
    cities: [
      { city: "London", population: "9,748,030" },
      { city: "Birmingham", population: "2,684,810" },
      { city: "Manchester", population: "2,811,760" },
      { city: "Glasgow", population: "1,688,907" },
      { city: "Liverpool", population: "906,443" },
    ],
  },
  {
    country: "Australia",
    cities: [
      { city: "Sydney", population: "5,184,900" },
      { city: "Melbourne", population: "5,315,600" },
      { city: "Brisbane", population: "2,536,450" },
      { city: "Perth", population: "2,093,000" },
      { city: "Adelaide", population: "1,345,000" },
    ],
  },
  {
    country: "India",
    cities: [
      { city: "Mumbai", population: "21,673,100" },
      { city: "Delhi", population: "33,807,400" },
      { city: "Bangalore", population: "14,008,300" },
      { city: "Hyderabad", population: "11,068,900" },
      { city: "Ahmedabad", population: "8,854,440" },
    ],
  },
  {
    country: "China",
    cities: [
      { city: "Shanghai", population: "29,867,900" },
      { city: "Beijing", population: "22,189,100" },
      { city: "Chongqing", population: "17,773,900" },
      { city: "Tianjin", population: "14,470,900" },
      { city: "Guangzhou", population: "14,590,100" },
    ],
  },
  {
    country: "Brazil",
    cities: [
      { city: "São Paulo", population: "22,806,700" },
      { city: "Rio de Janeiro", population: "13,824,300" },
      { city: "Brasília", population: "4,935,270" },
      { city: "Salvador", population: "3,994,980" },
      { city: "Fortaleza", population: "4,246,400" },
    ],
  },
  {
    country: "Russia",
    cities: [
      { city: "Moscow", population: "12,712,300" },
      { city: "Saint Petersburg", population: "5,581,710" },
      { city: "Novosibirsk", population: "1,620,000" },
      { city: "Yekaterinburg", population: "1,500,000" },
      { city: "Nizhny Novgorod", population: "1,250,000" },
    ],
  },
  {
    country: "Japan",
    cities: [
      { city: "Tokyo", population: "37,115,000" },
      { city: "Yokohama", population: "3,748,000" },
      { city: "Osaka", population: "18,967,500" },
      { city: "Nagoya", population: "9,556,880" },
      { city: "Sapporo", population: "2,660,950" },
    ],
  },
  {
    country: "Germany",
    cities: [
      { city: "Berlin", population: "3,576,870" },
      { city: "Hamburg", population: "1,841,000" },
      { city: "Munich", population: "1,472,000" },
      { city: "Cologne", population: "1,086,000" },
      { city: "Frankfurt", population: "753,000" },
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
