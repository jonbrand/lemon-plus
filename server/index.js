const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const routes = require("./src/routes/movies.routes");

mongoose.connect('mongodb://localhost:27017/lemon-plus', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use(express.json());

app.use("/", routes);

app.listen(3333, () => {
  console.log("Server Farmando!🚂🚂🚂")
});