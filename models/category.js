const Sequelize = require('sequelize');
const db = require('./database');

const CATEGORY = db.define('Category',{
  IDCategory : {
    type : Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement : true,
    allowNull : false ,
  },
  NameCategory : {
    type : Sequelize.STRING ,
    allowNull : false,
  }
});

module.exports = CATEGORY;
