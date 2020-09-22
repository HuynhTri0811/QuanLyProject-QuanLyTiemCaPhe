const Router = require('express').Router();
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const ERROR = require('../method/Error');
const SHIFT_DATE_STAFF = require('../models/shift_Date_Staff');


const router = new Router();

router.get('/',(req,res)=>{
    SHIFT_DATE_STAFF.findAll().then().catch();
})