const model = require('../models');
const { Company } = model;

async function getAllCompanies(req, res){
    const companies = await Company.findAll({include: [{all:true}]});
    res.json(companies);
}

module.exports = {
    getAllCompanies
};