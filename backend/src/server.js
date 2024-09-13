const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());

server.use(routes);

server.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = { server };
