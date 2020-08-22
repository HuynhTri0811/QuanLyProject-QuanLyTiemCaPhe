const Sequelize = require('sequelize');
const db = require('./database');
const PRODUCT = require('./product.js');
const SIZE = require('./size.js');

const PRODUCT_AND_SIZE = db.define('ProductAndSize',{
  IDProduct : {
    type : Sequelize.INTEGER,
    primaryKey : true,
    allowNull : false ,
  },
  IDSize :{
      type : Sequelize.INTEGER,
      primaryKey : true,
      allowNull : false,
  },
  PriceProductOfSiz:{
      type : Sequelize.INTEGER,
      allowNull : true,
  }
});
PRODUCT_AND_SIZE.belongsTo(PRODUCT,{
  foreignKey : 'IDProduct'
});
PRODUCT_AND_SIZE.belongsTo(SIZE,{
    foreignKey : 'IDSize'
});
module.exports = PRODUCT_AND_SIZE;
