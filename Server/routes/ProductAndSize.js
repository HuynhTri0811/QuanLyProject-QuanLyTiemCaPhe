const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const PRODUCT_AND_SIZE = require('../models/productAndSize');
const SIZE = require('../models/size.js');
const PRODUCT = require('../models/product');
const CATEGORY = require('../models/category.js');
const ERROR = require('../method/Error');

const router = new Router();

router.get('/',(req,res) => {
    PRODUCT_AND_SIZE.findAll({
        include : [
            {model : SIZE },
            {model : PRODUCT ,
                include :[
                    { model : CATEGORY}
            ]}
        ]
    })
    .then((result) => res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,400));
});
router.get('',(req,res) => {
    PRODUCT_AND_SIZE.findAll({
        include : [
            {model : SIZE },
            {model : PRODUCT ,
                include :[
                    { model : CATEGORY}
            ]}
        ]
    })
    .then((result) => res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,400) );
});


router.post('/create',(req,res) => {
    var { IDProduct,IDSize,Price } = req.body;
    PRODUCT.findOne({
        where : {
            IDProduct : IDProduct,
        }
    })
    .then((resultProduct) => {
        if(resultProduct === null){
            ERROR.ERROR_RESPONSE("CAN'T NOT FIND IDProduct:"+IDProduct,res,404);
        }else{
            SIZE.findOne({
                where :{
                    IDSize : IDSize,
                }
            }).then((resultSize)=>{
                if(resultSize === null){
                    ERROR.ERROR_RESPONSE("CAN'T NOT FIND IDSize:"+IDSize,res,404);
                }else{
                    PRODUCT_AND_SIZE.create({
                        IDProduct : IDProduct,
                        IDSize : IDSize,
                        PriceProductOfSiz : Price,
                    }).then((result)=>{
                        res.json(result);
                    }).catch((err)=>{
                        ERROR.ERROR_RESPONSE(err,res,401);
                    });
                }
            }).catch((err)=>ERROR.ERROR_RESPONSE(err,res,400));
        }
    })
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,404));
        
});

router.delete('/delete/:idProduct/:idSize',(req,res)=>{
    var IDSize = Number(req.params.idSize);
    var IDProduct = Number(req.params.idProduct);
    PRODUCT_AND_SIZE.destroy({
        where : {
            IDSize : IDSize,
            IDProduct : IDProduct,
        }
    })
    .then((result) => {
        if(result === 0){
            ERROR.ERROR_RESPONSE("CAN'T NOT FIND IDSize:"+IDSize + " OR IDProduct:"+IDProduct,res,404);
        }else{
            res.json(result);
        }
    })
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,402));    
});

router.put('/update/:idProduct/:idSize',(req,res)=>{

    var IDSize = Number(req.params.idSize);
    var IDProduct = Number(req.params.idProduct);
    var PriceProductOfSiz = req.body.Price;

    PRODUCT_AND_SIZE.update({
        PriceProductOfSiz : PriceProductOfSiz },{
        where :{
            IDSize : IDSize,
            IDProduct : IDProduct,
        }
    })
    .then((result)=>res.json(result))
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,403));
})
module.exports = router;