const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  console.log("Server started successfully");
  res.json({
    message: "Server is running",
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`The error is ${err}`);
  } else {
    console.log(`Server is running on PORT: ${PORT}`);
  }
});
