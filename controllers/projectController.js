const model = require('../models');
const { Project, Task, User_Project } = model;
const { Op } = require('sequelize');

async function getAllProjects(req, res){
    const projects = await Project.findAll({include: [{all:true}]})
    res.json(projects);

    // Get all project and yours tasks
    const project = await Project.findOne({ where: { id: 1 }, include: Task  });
    res.json(project);

    // Example with where in included model
    // const project = await Project.findAll({ 
    //     include: {
    //         model: Task,
    //         // where: {
    //         //     // id: 1
    //         // }
    //     }
    // });
    // res.json(project);

    // Find all users with yours projects
    // const users = await model.User.findAll({include: model.Project});
    // res.json(users);
}

module.exports = {
    getAllProjects
};
