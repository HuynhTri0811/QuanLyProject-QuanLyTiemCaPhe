const Sequelize = require('sequelize');
const db = require('./database');

const POSITION = db.define('Position',{
    IDPosition :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
    },
    NamePosition :{
        type : Sequelize.STRING,
        allowNull : false,
    },
    SalaryPosition :{
        type : Sequelize.INTEGER,
        allowNull : true,
    },
    InformationPosition :{
        type : Sequelize.STRING,
        allowNull : true,
    }
});

module.exports = POSITION;