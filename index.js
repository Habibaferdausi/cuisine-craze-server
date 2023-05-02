const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const allData = require("./data.json");

app.get("/", (req, res) => {
  res.json({ message: "hello server running" });
});
app.get("/allData", (req, res) => {
  res.json(allData);
});
app.listen(5000, () => {
  console.log("server is running");
});
