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

app.get("/allData/:id", (req, res) => {
  const id = req.params.id;
  const item = allData.find((pd) => pd.id === parseInt(id));
  res.send({ item });
});

app.listen(5000, () => {
  console.log("server is running");
});
