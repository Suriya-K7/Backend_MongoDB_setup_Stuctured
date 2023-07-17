const notesRouter = require("express").Router();
const Note = require("../Model/notesModel");
// getting full data

notesRouter.get("/api/notes/", (req, res) => {
  Note.find({}, {}).then((notes) => {
    res.status(200).json(notes);
  });
});

// posting data

notesRouter.post("/api/notes/", (req, res) => {
  //preparing object to store in collection
  const note = new Note(req.body);
  note.save().then(() => {
    res.status(201).json({ message: "post request completed" });
  });
});

// getting data of particular id

notesRouter.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  Note.findById(id).then((note) => {
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: "id not found" });
    }
  });
});

// delete data of particular id

notesRouter.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  Note.findByIdAndDelete(id).then((deletedNote) => {
    if (deletedNote) {
      res.status(200).json({ message: "Deleted sucessfully" });
    } else {
      res.status(404).json({ message: "id not found" });
    }
  });
});

// put data of particular id

notesRouter.put("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const updatedNote = req.body;
  Note.findByIdAndUpdate(id, updatedNote).then((updatedNote) => {
    if (updatedNote) {
      res.status(200).json({ message: "updated" });
    } else {
      res.status(404).json({ message: "id not found" });
    }
  });
});

// patching data of particular id

notesRouter.patch("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const updatedNote = req.body;
  Note.findByIdAndUpdate(id, updatedNote).then((updatedNote) => {
    if (updatedNote) {
      res.status(200).json({ message: "updated" });
    } else {
      res.status(404).json({ message: "id not found" });
    }
  });
});

module.exports = notesRouter;
