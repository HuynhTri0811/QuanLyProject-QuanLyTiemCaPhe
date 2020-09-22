const { DATEONLY } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('./database');
const SHIFT = require('./shift');
const STAFF = require('./staff');

const SHIFT_DATE_STAFF = db.define('',{
    IDShift :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false
    },
    IDStaff :{
        type : Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false
    },
    DATE :{
        type : DATEONLY,
        primaryKey : true,
        allowNull : false
    }
});


SHIFT_DATE_STAFF.belongsTo(SHIFT,{
    foreignKey : 'IDShift'
});
SHIFT_DATE_STAFF.belongsTo(STAFF,{
    foreignKey : 'IDStaff'
});
module.exports = SHIFT_DATE_STAFF;