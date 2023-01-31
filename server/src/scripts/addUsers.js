const database = require("../services/database");
const User = require("../models/user");
const userJSON = require("../data/user.json");

const addUsers = async () => {
  try {
    for (let user of userJSON) {
      console.log(`Inserindo ${user.name}`);
      await new User(user).save();
    }
    console.log('Final do Script');
  } catch (err) {
    console.log(err.message);
  }
};

addUsers();
