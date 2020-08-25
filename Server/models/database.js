const { Sequelize } = require('sequelize');

const database = new Sequelize('quanlyquancaphe','HuynhTri','',{
  host:'127.0.0.1',
  dialect : 'mysql'
});

module.exports = database;
