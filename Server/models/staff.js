const Sequelize = require('sequelize');
const db = require('./database');
const POSITION = require('./position');

const STAFF = db.define('Store',{
  IDStaff : {
    type : Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement : true,
    allowNull : false,
  },
  NameStaff : {
    type : Sequelize.STRING,
    allowNull : false,
  },
  URLImageStaff :{
    type : Sequelize.STRING,
    allowNull : true,
  },
  AdressStaff: {
    type :  Sequelize.STRING,
    allowNull : false,
    defaultValue : 'HCM'
  },
  NumberPhoneStaff : {
    type : Sequelize.STRING,
    allowNull : true,
  },
  IDPosition:{
    type:Sequelize.INTEGER
  }
});
STAFF.belongsTo(POSITION,{
  foreignKey :'IDPosition'
});

module.exports = STAFF;
