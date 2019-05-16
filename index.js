const express = require("express");
const db = require("./data/dbhelper");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Sever Running...");
});

server.get("/api/cars", (req, res) => {
  db.getCars()
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({ error: "Error Fetching Car" });
    });
});

const port = 5000;
server.listen(port, () => {
  console.log("server running...");
});
