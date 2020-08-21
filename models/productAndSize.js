const Sequelize = require('sequelize');
const db = require('./database');
const product = require('./product.js');
const size = require('./size.js');

const ProductAndSize = db.define('ProductAndSize',{
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
ProductAndSize.belongsTo(product,{
  foreignKey : 'IDProduct'
});
ProductAndSize.belongsTo(size,{
    foreignKey : 'IDSize'
});
module.exports = ProductAndSize;
