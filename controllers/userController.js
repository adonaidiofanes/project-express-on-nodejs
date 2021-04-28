const model = require('../models');
const { User, Project } = model;

async function getAllUsers(req, res){
    const users = await User.findAll();
    res.json(users);
}

module.exports = {
    getAllUsers
};