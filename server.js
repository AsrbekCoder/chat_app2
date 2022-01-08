const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = require("http").Server(app);

const io = new Server(server);
app.use(express.json());

let room = new Map();

app.get("/rooms/:id", (req, res) => {
  const { id: roomId } = req.params;
  const obj = room.has(roomId)
    ? {
        users: [...room.get(roomId).get("users").values()],
        massages: [...room.get(roomId).get("massages").values()],
      }
    : {
        users: [],
        massages: [],
      };

  res.json(obj);
});

app.post("/rooms", (req, res) => {
  const { roomId, userName } = req.body.obj;
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
io.on("connection", (socket) => {
  console.log("user", socket.id);

  socket.on("ROOM:JOIN", ({ roomId, userName }) => {
    socket.join(roomId);
    room.get(roomId).get("users").set(socket.id, userName);
    let users = [...room.get(roomId).get("users").values()];

    socket.to(roomId).emit("ROOM:JOINED", users);
  });

  socket.on("disconnect", () => {
    room.forEach((value, roomId) => {
      if (value.get("users").delete(socket.id)) {
        let users = [...value.get("users").values()];
        socket.to(roomId).emit("ROOM:JOINED", users);
      }
    });
  });
});

server.listen(9999, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("server work");
});
