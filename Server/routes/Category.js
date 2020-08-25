const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const CATEGORY = require('../models/category.js');
const ERROR = require('./Error');
const router = new Router();

router.get('/',(req,res) => {
    CATEGORY.findAll()
    .then((result) => res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,400));
});

router.post('/create',(req,res) => {
    var NameCategory = req.body.NameCategory;
    CATEGORY.create({
        NameCategory 
    })
    .then((result) => res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,401));

});
router.delete('/delete/:id',(req,res)=>{
    var IDCategory = Number(req.params.id);
    CATEGORY.destroy({
        where :{
            IDCategory : IDCategory,
        }
    })
    .then((result) => res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,402));
});

router.put('/update/:id',(req,res)=>{
    var IDCategory = Number(req.params.id);
    var NameCategory = req.body.NameCategory;
    CATEGORY.findOne({
        where :{
            IDCategory : IDCategory,
        }
    }).then((result)=>{
        if(result === null){
            ERROR.ERROR_RESPONSE("CAN'T NOT FIND IDCategory:"+IDCategory,res,404);
        }else{
            CATEGORY.update({
                NameCategory : NameCategory,
                },{
                    where :{
                        IDCategory : IDCategory,
                    }
                })
                .then((result)=>res.json(result))
                .catch((err) => ERROR.ERROR_RESPONSE(err,res,401));
        }
    }).catch((err) => ERROR.ERROR_RESPONSE(err,res,404));
});
module.exports = router;