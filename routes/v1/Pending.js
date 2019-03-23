const express = require('express');
const router = express.Router();
const { Gyn, Ngyn, Uvfish, Cll } = require('../../db');



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
            res.json(await Gyn.findAll({ where: { stage: `pending` } }));
            break;
        case `NGYN`:
            res.json(await Ngyn.findAll({ where: { stage: `pending` } }));
            break;
        case `UVFISH`:
            res.json(await Uvfish.findAll({ where: { stage: `pending` } }));
            break;
        case `CLL`:
            res.json(await Cll.findAll({ where: { stage: `pending` } }));
            break;
        default: break;
    }
})
);




module.exports = router;