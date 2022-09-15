const mongoose = require('mongoose');

const Episode = mongoose.model('Episode', {
  season_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Season',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  frontCover: {
    type: String,
    required: true,
  },
});

module.exports = Episode;