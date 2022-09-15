const express = require("express");
const env = require("./src/config/envConfig");
const app = express();

app.get("/", (req, res) => {
  res.json({ mes: "Welcome to eCommerce" });
});

const port = env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
