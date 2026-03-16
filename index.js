const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/info", (req, res) => {
  res.json({
    name: "npm-lab",
    version: "1.0.0",
    description: "Practical 4 API info"
  });
});

app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Shanmuk Kumar",
    course: "Open Source Technologies"
  });
});

app.get("/", (req, res) => {
  res.send("Server running at http://localhost:3000");
});

app.listen(PORT, () => {
  console.log("Server running at http://localhost:3000");
});