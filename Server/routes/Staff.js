const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const ERROR = require('../method/Error');
const STAFF = require('../models/staff');
const POSITION = require('../models/position');
const { rootCertificates } = require('tls');

const router = new Router();

router.get('', (req, res) => {
    STAFF.findAll({
        include: [
            { model: POSITION }
        ]
    })
        .then((result) => res.json(result))
        .catch((err) => ERROR.ERROR_RESPONSE(err, res, 400));
});

router.get('/', (req, res) => {
    STAFF.findAll({
        include: [
            { model: POSITION }
        ]
    })
        .then((result) => res.json(result))
        .catch((err) => ERROR.ERROR_RESPONSE(err, res, 400));
});

router.get('/:id', (req, res) => {
    var IDStaff = Number(req.params.id);

    STAFF.findOne({
        where: {
            IDStaff: IDStaff
        }
    })
        .then((result) => res.json(result))
        .catch((err) => ERROR.ERROR_RESPONSE(err, res, 404));
})

router.post('/create', (req, res) => {

    var { NameStaff, URLImageStaff, AdressStaff, NumberPhoneStaff, IDPosition } = req.body;

    POSITION.findOne({
        where: {
            IDPosition: IDPosition,
        }
    }).then((resultPosition) => {
        if (resultPosition === null) {
            ERROR.ERROR_RESPONSE("CAN'T NOT FIND IDPosition :" + IDPosition, res, 404);
        } else {
            STAFF.create({
                NameStaff: NameStaff,
                URLImageStaff: URLImageStaff,
                AdressStaff: AdressStaff,
                NumberPhoneStaff: NumberPhoneStaff
            })
                .then((result) => {
                    res.json(result);
                })
                .catch((err) => ERROR.ERROR_RESPONSE(err, res, 401));
        }
    }).catch((err) => ERROR.ERROR_RESPONSE(err, res, 404));

});

router.delete('/delete/:id', (req, res) => {
    var IDStaff = Number(req.params.id);

    STAFF.destroy({
        where: {
            IDStaff: IDStaff,
        }
    })
        .then((result) => res.json(result))
        .catch((err) => ERROR.ERROR_RESPONSE(err, res, 402));
});

router.put('/update/:id', (req, res) => {
    var IDStaff = Number(req.params.id);

    var { NameStaff, URLImageStaff, AdressStaff, NumberPhoneStaff, IDPosition } = req.body;

    POSITION.findOne({
        where: {
            IDPosition: IDPosition
        }
    }).then((resultPosition) => {
        if (resultPosition === null) {
            ERROR.ERROR_RESPONSE("CAN'T NOT FIND IDPosition:" + IDPosition, res, 404);
        } else {
            STAFF.update({
                NameStaff: NameStaff,
                URLImageStaff: URLImageStaff,
                AdressStaff: AdressStaff,
                NumberPhoneStaff: NumberPhoneStaff,
                IDPosition: IDPosition
            }, {
                where: {
                    IDStaff: IDStaff
                }
            })
                .then((result) => res.json(result))
                .catch((err) => ERROR.ERROR_RESPONSE(err, res, 403));

        }
    })
        .catch((err) => ERROR.ERROR_RESPONSE(err, res, 404));


});

router.pacth('/update', (req, res) => {
    var { NameStaff, URLImageStaff, AdressStaff, NumberPhoneStaff, IDPosition } = req.body;

    POSITION.findOne({
        where: {
            IDPosition: IDPosition
        }
    }).then((resultPosition) => {
        if (resultPosition === null) {
            ERROR.ERROR_RESPONSE("CAN'T NOT FIND IDPosition:" + IDPosition, res, 404);
        } else {
            STAFF.update({
                NameStaff: NameStaff,
                URLImageStaff: URLImageStaff,
                AdressStaff: AdressStaff,
                NumberPhoneStaff: NumberPhoneStaff,
                IDPosition: IDPosition
            })
                .then((result) => res.json(result))
                .catch((err) => ERROR.ERROR_RESPONSE(err, res, 403));

        }
    })
        .catch((err) => ERROR.ERROR_RESPONSE(err, res, 404));
});

module.exports = router;