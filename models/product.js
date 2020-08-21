const Sequelize = require('sequelize');
const db = require('./database');
const caterogy = require('./category.js');

const Product = db.define('Product',{
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
  }  
});
Product.belongsTo(caterogy,{
  foreignKey : 'IDCategory'
});
module.exports = Product;
