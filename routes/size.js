const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const size = require('../models/size.js');

const router = new Router();

router.get('/',(req,res) => {
    size.findAll().then((result) => res.json(result))
                      .catch(console.log("Lỗi không thể lấy danh sách size"));
});

router.post('/create',async (req,res) => {
    var NameSize = req.body.NameSize;

    await size.create({
        NameSize 
    })
    .then((result) => res.json(result))
    .catch(console.error());

});
router.post('/delete',(req,res)=>{
    var IDSize = Number(req.body.IDSize);
    size.destroy({
        where :{
            IDSize : IDSize,
        }
    })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

router.post('/update/:id',(req,res)=>{
    var IDSize = Number(req.params.id);
    var NameSize = req.body.NameSize;
    size.findOne({
        where :{
            IDSize : IDSize,
        }
    }).then((result)=>{
        console.log(result);
        if(result === null){
            res.json(null);
        }else{
            size.update({
                NameSize : NameSize,
                },{
                    where :{
                        IDSize : IDSize,
                    }
                })
                .then((result)=>res.json(result))
                .catch(console.error());
        }
    }).catch(console.error());
})
module.exports = router;