const { TIME } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('./database');
const PART_OR_FULL = require('./partOrFull');

const SHIFT = db.define('Shift',{
    IDShift :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
    },
    NameShift :{
        type : Sequelize.STRING,
        allowNull : false,
    },
    TimeShiftStart:{
        type : Sequelize.TIME,
        allowNull : true
    },
    TimeShiftEnd :{
        type : Sequelize.TIME,
        allowNull : true,
    },
    IDPart_Or_Full :{
        type : Sequelize.INTEGER,
    }
});

SHIFT.belongsTo(PART_OR_FULL,{
    foreignKey : 'IDPart_Or_Full'
})

module.exports = SHIFT;