const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('job', {
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
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
      }
    },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
      }
    },
  description: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
    unique: true,
    validate: {
        notEmpty: true
      }
  }
});