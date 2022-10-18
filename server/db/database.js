const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/dcvmfbue3otak', { logging: false });

module.exports = db;

//do not touch!!!