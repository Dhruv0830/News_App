const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

app.get("/latest", (req, res) => {
  category = "general";
  url =
    "https://gnews.io/api/v4/top-headlines?category=" +
    category +
    "&lang=en&country=us&max=10&apikey=" +
    API_KEY;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      articles = data.articles;
      res.send(articles);
    });
});

app.get("/search", (req, res) => {
  search_url =
    "https://gnews.io/api/v4/search?q=" +
    req.body.search_item +
    "&lang=en&country=us&max=10&apikey=" +
    API_KEY;

  fetch(search_url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      articles = data.articles;
      res.send(articles);
    });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`The error is ${err}`);
  } else {
    console.log(`Server is running on PORT: ${PORT}`);
  }
});
