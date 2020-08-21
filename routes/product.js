const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const product = require('../models/product.js');
const category = require('../models/category.js');

var router = new Router();

router.get('/',(req,res) => {
    product.findAll({
        include:[
            {model : category}
        ]
    }).then((result) => {
        console.log(result);
        res.send(result);
    })
    .catch(console.log("Lỗi không thể lấy danh sách size"));
});

router.post('/create',(req,res)=>{
    var NameProduct = req.body.NameProduct;
    var IDCategory = req.body.IDCategory;
    category.findOne({
        where :{
            IDCategory : IDCategory,
        }
    })
    .then((result) =>{
        product.create({
            NameProduct : NameProduct,
            IDCategory : result.toJSON().IDCategory,
        }).then(()=>{
            res.json("thanh cong");
        }).catch(console.error());
    })
    .catch(console.error());
});

router.put('/update/:id',(req,res)=>{
    var { NameProduct,URLProduct,Information } = req.body;
    var IDCategory = req.body.IDCategory;
    var IDProduct = Number(req.params.id);

    category.findOne({
        where :{
            IDCategory : IDCategory,
        }
    })
    .then((resultCatelogy) => {
        if(resultCatelogy === null){
            res.json(resultCatelogy);
        }else{
            product.update({
                NameProduct : NameProduct,
                URLProduct : URLProduct,
                Information : Information,
                IDCategory : IDCategory,
            },{
                where :{
                    IDProduct : IDProduct,
                }
            })
            .then(res.json('update thanh cong san pham co id '+IDProduct))
            .catch(console.error());
        }
    })
    .catch((err)=>console.log(err));
})

router.delete('delete/:id',(req,res)=>{

})
module.exports = router;