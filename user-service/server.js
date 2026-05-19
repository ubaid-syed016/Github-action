const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "User Service",
    status: "Running",
    port: 3001
  });
});

app.listen(3001, () => {
  console.log("User Service Started on Port 3001");
});
