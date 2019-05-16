const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Sever Running...");
});

const port = 5000;
server.listen(port, () => {
  console.log("server running...");
});
