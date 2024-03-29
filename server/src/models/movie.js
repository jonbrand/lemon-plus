const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', {
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  frontCover: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = Movie;