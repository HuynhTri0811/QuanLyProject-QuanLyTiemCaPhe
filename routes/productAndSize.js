const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const size = require('../models/size.js');
const productAndSize = require('../models/productAndSize');
const product = require('../models/product');
const Error404 = require('./404Error');
const Size = require('../models/size.js');
const Product = require('../models/product');
const Category = require('../models/category.js');


const router = new Router();
router.get('/',(req,res) => {
    
    productAndSize.findAll({
        include : [
            {model : size },
            {model : product , include :[
                {model : Category}
            ]}
        ]
    })
    .then((result) => { 
        res.json(result) 
    })
    .catch((err) =>
        Error404(err,res)
    );
});

router.post('/create',async (req,res) => {
    var { IDProduct,IDSize,Price } = req.body;
    product.findOne({
        where : {
            IDProduct : IDProduct,
        }
    })
    .then((result) => {
        if(result === null){
            Error404.ERROR_RESPONSE("CAN'T NOT FIND IDProduct ",res,300);
        }else{
            size.findOne({
                where :{
                    IDSize : IDSize,
                }
            }).then((resultSize)=>{
                if(resultSize === null){
                    res.json(resultSize)
                }else{
                    productAndSize.create({
                        IDProduct : IDProduct,
                        IDSize : IDSize,
                        PriceProductOfSiz : Price,
                    }).then(()=>{
                        res.json('SUCCESS');
                    }).catch((err)=>{
                        Error404.ERROR_RESPONSE(err,res);
                    });
                }
            }).catch((err)=>{
                res.json('400');
                console.log(err);
            });
        }
    })
    .catch((err)=>{
        res.json('400');
        console.log(err);
    });
});

router.delete('/delete/:idProduct/:idSize',(req,res)=>{
    var IDSize = Number(req.params.idSize);
    var IDProduct = Number(req.params.idProduct);
    productAndSize.destroy({
        where : {
            IDSize : IDSize,
            IDProduct : IDProduct,
        }
    })
    .then((result) => {
        if(result === 0){
            Error404.ERROR_RESPONSE("CAN'T NOT FIND IDSize:"+IDSize + " OR IDProduct:"+IDProduct,res);
        }else{
            res.json(result);
            console.log('DELETE ID PRODUCT: '+IDProduct +' AND ID SIZE: '+IDSize+' WAS SUCCESSFUL');
        }
    })
    .catch((err)=> Error404.ERROR_RESPONSE(err,res));    
});

router.put('/update/:idProduct/:idSize',(req,res)=>{

    var IDSize = Number(req.params.idSize);
    var IDProduct = Number(req.params.idProduct);
    var PriceProductOfSiz = req.body.PriceProductOfSiz;

    
})
module.exports = router;