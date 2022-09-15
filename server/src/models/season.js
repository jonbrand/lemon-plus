const mongoose = require('mongoose');

const Season = mongoose.model('Season', {
  movie_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = Season;