const model = require('../models');
const { Task, Project } = model;

// async function getAllTasks(req, res){
//     const tasks = await Task.findAll({include: [{all:true}]});
//     res.json(tasks);
// }

async function getAllTasks(req, res){
    const tasks = await Project.findAll({include: [{all:true}]});
    res.json(tasks);
}

module.exports = {
    getAllTasks
};