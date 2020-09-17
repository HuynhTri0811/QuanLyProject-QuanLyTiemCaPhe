const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const SIZE = require('../models/size.js');
const ERROR = require('../method/Error.js');

const router = new Router();

router.get('',(req,res) => {
    
    SIZE.findAll()
    .then((result) => res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,400));

});
router.get('/',(req,res) => {
    
    SIZE.findAll()
    .then((result) => res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,400));

});



router.post('/create',(req,res) => {
    var NameSize = req.body.NameSize;

    SIZE.create({
        NameSize 
    })
    .then((result) => res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,401));

});

router.delete('/delete/:id',(req,res)=>{
    var IDSize = Number(req.params.id);
    SIZE.destroy({
        where :{
            IDSize : IDSize,
        }
    })
    .then((result) => res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,402));
});

router.put('/update/:id',(req,res)=>{
    var IDSize = Number(req.params.id);
    var NameSize = req.body.NameSize;
    
    SIZE.update({
            NameSize : NameSize,
        },
        {
            where :{
                IDSize : IDSize,
            }
        })
        .then((result)=>res.json(result))
        .catch((err) => ERROR.ERROR_RESPONSE(err,res,403));
})
module.exports = router;