const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/portfolio', { logging: false });

module.exports = db;

//do not touch!!!