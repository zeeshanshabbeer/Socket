const express = require("express");

function SocketRouter(io) {
  const router = express.Router();

  router.get("/good", (req, res) => {
    const count = req.query.count;
    if (!count) {
      res
        .json({
          message: "count not exits",
        })
        .status(401);
    }
    io.emit("mode", count);
    res
      .json({
        message: count,
      })
      .status(200);
    // res.send("good boy");
  });
  return router;
}
module.exports = SocketRouter;
