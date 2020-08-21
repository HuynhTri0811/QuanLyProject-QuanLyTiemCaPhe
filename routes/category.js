const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const category = require('../models/category.js');
const Product = require('../models/product.js');
const Error404 = require('./404Error');
const router = new Router();

router.get('/',(req,res) => {
    category.findAll()
    .then((result) => res.json(result))
    .catch((err) => Error404.ERROR_RESPONSE(err,res));
});

router.post('/create',async (req,res) => {
    var NameCategory = req.body.NameCategory;
    await category.create({
        NameCategory 
    })
    .then((result) => res.json(result))
    .catch((err) => Error404.ERROR_RESPONSE(err,res));

});
router.delete('/delete/:id',(req,res)=>{
    var IDCategory = Number(req.params.id);
    category.destroy({
        where :{
            IDCategory : IDCategory,
        }
    })
    .then((result) => res.json(result))
    .catch((err) => Error404.ERROR_RESPONSE(err,res,400));
});

router.put('/update/:id',async (req,res)=>{
    var IDCategory = Number(req.params.id);
    var NameCategory = req.body.NameCategory;
    category.findOne({
        where :{
            IDCategory : IDCategory,
        }
    }).then((result)=>{
        console.log(result);
        if(result === null){
            res.json(null);
        }else{
            category.update({
                NameCategory : NameCategory,
                },{
                    where :{
                        IDCategory : IDCategory,
                    }
                })
                .then((result)=>res.json(result))
                .catch((err) => Error404.ERROR_RESPONSE(err,res,401));
        }
    }).catch(console.error());
});
module.exports = router;