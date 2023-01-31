const express = require("express");
const bodyParser = require("body-parser");
const database = require('./src/services/database');

const app = express();

const routes = require("./src/routes/movies.routes");

app.use(bodyParser.json());

app.use(express.json());

app.use("/", routes);

app.listen(3333, () => {
  console.log("Server Farmando!🚂🚂🚂")
});