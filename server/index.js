const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const cors = require("cors");
const dbConnect = require("./src/config");


app.use(cors());
app.use(dbConnect())

app.get("/", (req, res) => {
  console.log("server is running ");
  res.send("server is running");
});

server.listen(port, () => {
  console.log("server is running port ", port);
});
