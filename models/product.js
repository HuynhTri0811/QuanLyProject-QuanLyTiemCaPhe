const Sequelize = require('sequelize');
const db = require('./database');
const CATEGORY = require('./category.js');

const PRODUCT = db.define('Product',{
  IDProduct : {
    type : Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement : true,
    allowNull : false ,
  },
  NameProduct : {
    type : Sequelize.STRING ,
    allowNull : false,
  },
  URLProduct :{
    type : Sequelize.STRING ,
    allowNull : true,    
  },
  Information :{
      type : Sequelize.STRING,
      allowNull : true,
  },
  IDCategory:{
    type : Sequelize.INTEGER,
  },
  IsSell :{
    type : Sequelize.BOOLEAN,
    defaultValue : true,
  }  
});
PRODUCT.belongsTo(CATEGORY,{
  foreignKey : 'IDCategory'
});
module.exports = PRODUCT;
