const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");


router.get("/", (req, res) => {
  return res.json({ message: "Pegar todos os registros!"});
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.json({ message: `Pegar somente o registo com o ID: ${id}`});
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

router.put('/:id', (req, res) => {
  const id = req.params.id;

  res.json({ message: `Atualizar somente o resgistro com o ID: ${id}`});
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  res.json({ message: `Deletar somente o registro com o ID: ${id}`});
});

module.exports = router;