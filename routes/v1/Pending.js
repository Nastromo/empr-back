const express = require('express');
const router = express.Router();
const { Gyn, Ngyn, Uvfish, Cll, db } = require('../../db');
const Op = db.Op;



const errorHandler = reqHandler => {
    return async (req, res, next) => {
        try {
            await reqHandler(req, res, next)
        } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
        }
    }
}


router.post('/', errorHandler(async (req, res, next) => {
    switch (req.body.title) {
        case `GYN`:
            res.json(await Gyn.findAll({ where: { 
                stage: {
                    [Op.or]: [`PENDING`, `case canceled`, `Pop Slide`, `Cell Block`]
                }
            }}));
            break;
        case `NGYN`:
            res.json(await Ngyn.findAll({ where: { 
                stage: {
                    [Op.or]: [`PENDING`, `case canceled`]
                }
            }}));
            break;
        case `UVFISH`:
            res.json(await Uvfish.findAll({ where: { 
                stage: {
                    [Op.or]: [`PENDING`, `case canceled`]
                }
            }}));
            break;
        case `CLL`:
            res.json(await Cll.findAll({ where: { 
                stage: {
                    [Op.or]: [`PENDING`, `case canceled`]
                }
            }}));
            break;
        default: break;
    }
})
);




module.exports = router;