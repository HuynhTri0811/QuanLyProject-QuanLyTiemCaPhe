const { Sequelize } = require('sequelize');

const database = new Sequelize('quanlyquancaphe','root','root',{
  host:'localhost',
  dialect : 'mysql'
});

module.exports = database;
