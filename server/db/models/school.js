const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('school', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  date: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
        notEmpty: true
      }
    },
  certification: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
        notEmpty: true
      }
  }
});