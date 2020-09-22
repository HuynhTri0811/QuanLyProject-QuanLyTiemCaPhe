const Router = require('express').Router();
const fs = require('fs');
const { NUMBER } = require('sequelize');
const Sequelize = require('sequelize');
const { ERROR_RESPONSE } = require('../method/Error');
const Op = Sequelize.Op;

const ERROR = require('../method/Error.js');
const PART_OR_FULL = require('../models/partOrFull');

const router = new Router();

router.get('/',(req,res)=>{
    PART_OR_FULL.findAll()
    .then((result)=> res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,400));
})

router.get('',(req,res)=>{
    PART_OR_FULL.findAll()
    .then((result)=> res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,400));
})

router.post('/create',(req,res)=>{
    var { Name_Part_Or_Full } = req.body;

    PART_OR_FULL.create({
        Name_Part_Or_Full : Name_Part_Or_Full
    })
    .then((result)=> res.json(result))
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,401));
});

router.delete('/delete/:id',(req,res)=>{
    var IDPart_Or_Full = Number(req.params.id);
    PART_OR_FULL.destroy({
        where :{
            IDPart_Or_Full : IDPart_Or_Full
        }
    })
    .then((result)=>res.json(result))
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,402));
});

router.put('/update/:id',(req,res)=>{
    var IDPart_Or_Full = Number(req.params.id);
    var Name_Part_Or_Full = req.body.Name_Part_Or_Full;

    PART_OR_FULL.update({
        Name_Part_Or_Full : Name_Part_Or_Full
    },{
        where :{
            IDPart_Or_Full : IDPart_Or_Full
        }
    })
    .then((result)=>res.json(result))
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,403));
});


router.get('/:id',(req,res)=>{
    var IDPart_Or_Full = Number(req.params.id);

    PART_OR_FULL.findOne({
        where:{
            IDPart_Or_Full : IDPart_Or_Full
        }
    })
    .then((result)=>res.json(result))
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,404));
});

module.exports = router;