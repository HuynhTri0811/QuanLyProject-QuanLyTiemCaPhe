const Sequelize = require('sequelize');
const db = require('./database');


/**
 * @param {*} ERROR 
 */
/**
 ** 0 : fulll time
 ** 1 : part time
 */
const PART_OR_FULL = db.define('PartOrFullTime',{
    IDPart_Or_Full : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
    },
    Name_Part_Or_Full :{
        type : Sequelize.STRING,
        allowNull : false,
    }
});

module.exports = PART_OR_FULL;