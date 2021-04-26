var express = require('express');
var router = express.Router();
// var User = require("../models/user");

const model = require('../models'); // importing all the database models in the new constant
const User = model.User; // creating a constant of user model from the models

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await User.findAll();
  console.log(users);
  res.end(JSON.stringify(users));
  // console.log("Jane's auto-generated ID:", jane.id);
  // res.send('dog');
  // const users = await User.create({ firstName: "Jane", lastName: "Doe" });
});

module.exports = router;
