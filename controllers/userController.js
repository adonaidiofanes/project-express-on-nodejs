const model = require('../models');
const { User, Project, Task } = model;
const { Op } = require('sequelize');

async function getAllUsers(req, res){
    const users = await User.findAll(
        {
            include: [
                { all:true }
            ]
        }
    );
    res.json(users);
}

module.exports = {
    getAllUsers
};