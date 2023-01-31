const express = require("express");
const bodyParser = require("body-parser");
const database = require('./src/services/database');
const cors = require('cors');

const app = express();

const routes = require("./src/routes/movies.routes");
const usersRoutes = require('./src/routes/users.routes');

// Middlewares
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

// Routes
app.use("/", routes);
app.use("/user", usersRoutes);

app.listen(3333, () => {
  console.log("Server Farmando na porta 3333!🚂🚂🚂")
});