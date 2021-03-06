const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
