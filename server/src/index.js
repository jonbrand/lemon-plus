const express = require("express");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

app.get("/movies", (request, response) => {
  return response.json([
    "Filme 1",
    "Filme 2",
    "Filme 3"
  ]);
});

app.listen(3333);