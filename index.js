const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Initialize server
const port = process.env.PORT || 5004
app.listen(port, () => {
  console.log("Running on port 5000.");
});

module.exports = app