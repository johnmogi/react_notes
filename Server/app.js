const express = require("express");
const cors = require("cors");
const noteController = require("./controller/note");
const server = express();
server.use(cors());
server.use(express.json());
server.use("/api", noteController);
server.listen(3000, () => console.log("Listening on http://localhost:3000"));
