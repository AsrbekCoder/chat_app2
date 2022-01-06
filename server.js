const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = require("http").Server(app);

const io = new Server(server);
app.use(express.json());

let room = new Map();

app.get("/rooms", (req, res) => {
  res.json(room);
});

io.on("connection", (socket) => {
  console.log("user", socket.id);
});

app.post("/rooms", (req, res) => {
  const { roomId, userName } = req.body;

  if (!room.has(roomId)) {
    room.set(
      roomId,
      new Map([
        ["users", new Map()],
        ["massages", []],
      ])
    );
  }

  res.send();
});

server.listen(9999, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("server work");
});
