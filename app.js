require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { log, error } = require("./utlis/logger");
const { URL, PORT } = require("./utlis/config");
const notesRouter = require("./Controller/noteRoutes");
const {
  requestMidlleware,
  unknowEndpointMidlleware,
} = require("./utlis/middleware");

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose
  .connect(URL)
  .then(() => {
    log("connected to mongoDB");
  })
  .catch((err) => {
    error(err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.use("/api/notes", requestMidlleware);

app.use(notesRouter);

app.use(unknowEndpointMidlleware);

module.exports = app;
