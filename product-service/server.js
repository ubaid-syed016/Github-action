const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "Product Service",
    status: "Running",
    port: 3002
  });
});

app.listen(3002, () => {
  console.log("Product Service Started on Port 3002");
});
