const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 7777;

app.use(express.json());
app.listen(7777, '0.0.0.0', () => {
    console.log("isledi")
});

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  color: {  type: String, default: "#ffffff"},
  isPinned: { type: Boolean, default: false},
  createdAt: {  type: Date, default: Date.now},
  updatedAt: {  type: Date, default: Date.now},
});

const note = mongoose.model('note', noteSchema);
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB-ə qoşuldu"))
  .catch((err) => console.log("Xəta:", err));

app.post('/api/notes', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await note.create({ title, content });
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/notes', async (req, res) => {
  try {
    const notes = await note.find();
    res.status(200).json(notes);
  } catch (err){
    res.status(500).json({error: err.message})
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const foundNote = await note.findById(id);

    if (!foundNote) {
      res.status(404).json({ error: "Note tapılmadı" });
    } else {
      res.status(200).json(foundNote);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/notes/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updates = req.body;
        const updatedNote = await note.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedNote) {
            res.status(404).json({ error: "Note tapılmadı" });
            } else {
            res.status(200).json(updatedNote);
            }
    } catch (err){
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/notes/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const deletedNote = await note.findByIdAndDelete(id);
        if (!deletedNote) {
            res.status(404).json({ error: "Note tapılmadı" });
            } else {
            res.status(200).json(deletedNote);
            }
    } catch (err){
        res.status(500).json({ error: err.message });
    }
});
