const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {
  const data = req.body;

  fs.appendFile("data.json", JSON.stringify(data) + "\n", (err) => {
    if (err) {
      return res.status(500).json({ message: "Błąd zapisu" });
    }

    res.json({ message: "Dane zapisane na serwerze!" });
  });
});

app.listen(3000, () => {
  console.log("Server działa na http://localhost:3000");
});