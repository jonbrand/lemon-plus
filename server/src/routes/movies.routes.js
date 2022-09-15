const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find({});

    res.json({ error: false, movies });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const movie = await Movie.findById(id);

    res.json({ error: false, movie });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const movie = req.body;
    const response = await new Movie(movie).save();

    res.json({
      error: false,
      movie: response
    });
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    
    const updateMovie = req.body;

    const movie = await Movie.findByIdAndUpdate(id, updateMovie);

    res.json({ error: false, movie });
  } catch (err) {
    res.json({ error: true , message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Movie.findByIdAndDelete(id);
    
    res.json({ error: false, message: 'Filme deletado' });
  } catch {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;