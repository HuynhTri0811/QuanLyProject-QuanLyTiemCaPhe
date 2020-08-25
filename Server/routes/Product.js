const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const PRODUCT = require('../models/product.js');
const CATEGORY = require('../models/category.js');
const ERROR =  require('./Error');

var router = new Router();

router.get('/',(req,res) => {
    PRODUCT.findAll({
        include:[
            {model : CATEGORY}
        ]
    }).then((result) => {
        res.json(result);
    })
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,400));
});

router.post('/create',(req,res)=>{
    
    var NameProduct = req.body.NameProduct;
    var IDCategory  = req.body.IDCategory;
    var URLProduct  = req.body.URLProduct;
    var Information = req.body.Information;

    CATEGORY.findOne({
        where :{
            IDCategory : IDCategory,
        }
    })
    .then((resultCatelogy) =>{
        if(resultCatelogy === null){
            res.json(ERROR.ERROR_RESPONSE("CAN'T NOT FIND IDCategory:"+IDCategory,res,404));
        }else{
            PRODUCT.create({

                NameProduct : NameProduct,
                IDCategory : resultCatelogy.toJSON().IDCategory,
                URLProduct : URLProduct,
                Information : Information,
            
            })
            .then((result)=>res.json(result))
            .catch((err)=>ERROR.ERROR_RESPONSE(err,res,401));
        }
    })
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,401));
});

router.put('/update/:id',(req,res)=>{
    var { NameProduct , URLProduct , Information , IsSell } = req.body;
    var IDCategory = req.body.IDCategory;
    var IDProduct = Number(req.params.id);

    CATEGORY.findOne({
        where :{
            IDCategory : IDCategory,
        }
    })
    .then((resultCatelogy) => {
        if(resultCatelogy === null){
            ERROR.ERROR_RESPONSE("CAN'T FIND IDCategory :"+IDCategory,res,404);
        }else{
            PRODUCT.update({
                NameProduct : NameProduct,
                URLProduct : URLProduct,
                Information : Information,
                IDCategory : IDCategory,
                IsSell : IsSell,
            },{
                where :{
                    IDProduct : IDProduct,
                }
            })
            .then((result)=>res.json(result))
            .catch((err)=>ERROR.ERROR_RESPONSE(err,res,403));
        }
    })
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,404));
})

router.delete('/delete/:id',(req,res)=>{
    var IDProduct = Number(req.params.id);
    PRODUCT.destroy({
        where :{
            IDProduct: IDProduct
        }
    })
    .then((result)=>res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,402));
})
module.exports = router;