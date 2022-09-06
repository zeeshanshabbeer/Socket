const express = require("express");
const app = express();
// socket

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

// socket router
const socketRouter = require("./routes/socketRouter")(io);
app.use("/api/v1", socketRouter);

app.set("view engine", "ejs");

app.set(express.urlencoded({ extended: false }));

app.set(express.json());

//landing page

app.get("/", (req, res) => {
  res.render("index");
});

// socket connected or not
io.on("connection", (socket) => {
  console.log(socket.id);
});

server.listen(3001, () => {
  console.log("server is running on port 30001");
});
