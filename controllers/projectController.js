const model = require('../models');
const { Project } = model;

async function getAllProjects(req, res){
    const projects = await Project.findAll({include: [{all:true}]})
    res.json(projects);
}

module.exports = {
    getAllProjects
};
