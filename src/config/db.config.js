// src/config/db.config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tutores', 'root', '112358', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
