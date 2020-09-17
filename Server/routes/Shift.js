const { response } = require('express');
const ERROR = require('../method/Error');
const SHIFT = require('../models/shift');

const Router = require('express').Router;
const SHIFT = require('../models/shift');
const router = new Router();

router.get('',(req,res)=>{
    SHIFT.findAll()
    .then((result)=> res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,400));
});

router.get('/',(req,res)=>{
    SHIFT.findAll()
    .then((result)=> res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,400));
});


router.post('/create',(req,res)=>{
    var {
        NameShift , 
        TimeShiftStart,
        TimeShiftEnd,
        IDPart_Or_Full
    } = req.body;

    SHIFT.create({
        NameShift : NameShift,
        TimeShiftStart : TimeShiftStart,
        TimeShiftEnd : TimeShiftEnd,
        IDPart_Or_Full : IDPart_Or_Full
    })
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>ERROR.ERROR_RESPONSE(err,res,401));
});


router.delete('/delete/:id',(req,res)=>{
    var IDShift = Number(req.params.id);

    SHIFT.destroy({
        where : {
            IDShift : IDShift
        }
    })
    .then((result)=>res.json(result))
    .catch((err)=> ERROR.ERROR_RESPONSE(err,res,402));
});

router.put('/update/:id',(req,res)=>{
    var IDShift = Number(req.params.id);
    var { NameShift,
        TimeShiftStart,
        TimeShiftEnd,
        IDPart_Or_Full    
    } = req.body;

    SHIFT.update({
        NameShift : NameShift,
        TimeShiftStart : TimeShiftStart,
        TimeShiftEnd : TimeShiftEnd,
        IDPart_Or_Full : IDPart_Or_Full
    },{
        where :{
            IDShift : IDShift,
        }
    })
    
});

module.exports = router;

