const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const ERROR = require('./Error.js');
const POSITION = require('../models/position.js');

const router = new Router();

router.get('',(req,res)=>{
    POSITION.findAll()
    .then((result)=>res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,400));
});

router.get('/',(req,res)=>{
    POSITION.findAll()
    .then((result)=>res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,400));
});

router.post('/create',(req,res)=>{

    var {NamePosition , SalaryPosition ,InformationPosition } = req.body;

    POSITION.create({
        NamePosition : NamePosition,
        SalaryPosition : SalaryPosition,
        InformationPosition : InformationPosition
    })
    .then((result)=>res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,401));
});

router.delete('/delete/:id',(req,res)=>{
    var IDPosition = Number(req.params.id);

    POSITION.destroy({
        where :{
            IDPosition : IDPosition,
        }
    })
    .then((result)=> res.json(result))
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,402));
});

router.put('/update/:id',(req,res)=>{
    var IDPosition = Number(req.params.id);
    var {NamePosition , SalaryPosition ,InformationPosition } = req.body;

    POSITION.update({
        NamePosition : NamePosition,
        SalaryPosition : SalaryPosition,
        InformationPosition : InformationPosition,
    },{
        where:{
            IDPosition : IDPosition
        }
    })
    .then((result) => res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,403));
});

router.get('/:id',(req,res)=>{
    var IDPosition = Number(req.params.id);
    POSITION.findOne({
        where:{
            IDPosition: IDPosition,
        }
    })
    .then(((result)=>res.json(result))
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,404)));
});

module.exports = router;