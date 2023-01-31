const database = require("../services/database");
const Movie = require("../models/movie");
const movieJSON = require("../data/movie.json");

const addMovies = async () => {
  try {
    for (let movie of movieJSON) {
      console.log(`Inserindo ${movie.title}`);
      await new Movie(movie).save();
    }
    console.log('Final do Script');
  } catch (err) {
    console.log(err.message);
  }
};

addMovies();