var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

const model = require('../models'); // importing all the database models in the new constant
const { User } = model.User; // creating a constant of user model from the models

router.get('/', userController.getAllUsers);

module.exports = router;
