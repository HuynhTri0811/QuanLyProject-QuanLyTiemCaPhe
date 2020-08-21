const Sequelize = require('sequelize');
const db = require('./database');

const Size = db.define('Size',{
  IDSize : {
    type : Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement : true,
    allowNull : false ,
  },
  NameSize : {
    type : Sequelize.STRING ,
    allowNull : false,
  }
});

module.exports = Size;
