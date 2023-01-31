const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/lemon-plus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});