var express = require('express');
var router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);

module.exports = router;
