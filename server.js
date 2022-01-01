const express = require("express");

const app = express();

let room = new Map();

app.get("/rooms", (req, res) => {
  res.set("hello", "");
  res.json(room);
});

app.listen(8080, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("server work");
});
