const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const ERROR = require('./Error.js');
const STORE = require('../models/store.js');

const router = new Router();

router.get('/',(req,res)=>{
    STORE.findAll()
    .then((result)=>res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,400));
});

router.get('',(req,res)=>{
    STORE.findAll()
    .then((result)=>res.json(result))
    .catch((err) => ERROR.ERROR_RESPONSE(err,res,400));
});

router.post('/create',(req,res)=>{

    var { NameStore ,
          URLImageStore ,
          AdressStore ,
          AdressCity ,
          AdressDistritc ,
          Hotline,
          IsWifiFree,
          Payment_By_Card
        } = req.body;

    STORE.create({
        NameStore : NameStore,
        URLImageStore : URLImageStore,
        AdressCity : AdressCity,
        AdressStore : AdressStore,
        AdressDistritc : AdressDistritc,
        Hotline : Hotline,
        IsWifiFree : IsWifiFree,
        Payment_By_Card : Payment_By_Card
    })
    .then((result)=>res.json(result))
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,401));

});

router.delete('/delete/:id',(req,res)=>{
    var IDStore = Number(req.params.id);
    STORE.destroy({
        where : {
            IDStore : IDStore
        }
    })
    .then((result)=> res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,402));
});

router.put('/update/:id',(req,res)=>{

    var IDStore = Number(req.params.id);
    var { NameStore ,
        URLImageStore ,
        AdressStore ,
        AdressCity ,
        AdressDistritc ,
        Hotline,
        IsWifiFree,
        Payment_By_Card
      } = req.body;

    STORE.update({
        NameStore : NameStore,
        URLImageStore : URLImageStore,
        AdressCity : AdressCity,
        AdressStore : AdressStore,
        AdressDistritc : AdressDistritc,
        Hotline : Hotline,
        IsWifiFree : IsWifiFree,
        Payment_By_Card : Payment_By_Card
    },{
        where :{
            IDStore : IDStore
        }
    })
    .then((result)=>res.json(result))
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,401));
});

module.exports = router;
