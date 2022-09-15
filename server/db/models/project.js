const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('project', {
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
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  repo: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: true
      }
    },
  video: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
        notEmpty: true
      }
  }
});