const model = require('../models');
const { User } = model;

async function getAllUsers(req, res){
    const users = await User.findAll();
    res.json(users);
}

module.exports = {
    getAllUsers
};