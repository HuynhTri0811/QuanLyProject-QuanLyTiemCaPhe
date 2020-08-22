const Sequelize = require('sequelize');
const db = require('./database');
const { sequelize } = require('./size');

const Store = db.define('Store',{
    IDStore : {
      type : Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement : true,
      allowNull : false ,
    },
    NameStore : {
      type : Sequelize.STRING ,
      allowNull : false,
    },
    URLImageStore :{
      
      type : Sequelize.STRING ,
      allowNull : true,    
    },
    AdressStore :{
        type : Sequelize.STRING,
        allowNull : true,
    },
    AdressCity :{
        type : Sequelize.STRING,
        allowNull : true,  
    },
    AdressDistritc:{
        type : Sequelize.STRING,
        allowNull : true,  
    },
    Hotline:{
      type : Sequelize.INTEGER,
    },
    IsWifiFree:{
        type : Sequelize.BOOLEAN,
        defaultValue : true,
    },
    Payment_By_Card:{
        type : Sequelize.BOOLEAN,
        defaultValue : false,
    }
  });
  module.exports = Product;
  