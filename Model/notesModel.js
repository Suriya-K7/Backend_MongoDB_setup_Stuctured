const mongoose = require("mongoose");

// saving the data in DB
// defining a schema
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

// create a model
module.exports = mongoose.model("Note", noteSchema, "notes");
