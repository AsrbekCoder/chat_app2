const express = require("express");
const { Server } = require("socket.io");

const app = express();

const server = require("http").Server(app);

const io = new Server(server);

let room = new Map();

app.get("/rooms", (req, res) => {
  room.set("hello", "");
  res.json(room);
});

io.on("connection", (socket) => {
  console.log("user", socket.id);
});

// app.post("/rooms", (req, res) => {

// });

server.listen(3000, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("server work");
});
