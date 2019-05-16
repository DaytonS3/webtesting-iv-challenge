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

server.post("/api/cars", (req, res) => {
  db.addCar(req.body)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.delete("/api/cars/:id", (req, res) => {
  const id = req.params.id;
  db.deleteCar(id)
    .then(car => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ error: "Error Delete Car" });
    });
});

module.exports = server;
