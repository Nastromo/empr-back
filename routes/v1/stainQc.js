const express = require('express');
const router = express.Router();
const { Gyn, Ngyn } = require('../../db');



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
            res.json(await Gyn.findAll({ where: { stage: `pending stain qc` } }));
            break;
        case `NGYN`:
            res.json(await Ngyn.findAll({ where: { stage: `pending stain qc` } }));
            break;
        default: break;
    }
})
);




module.exports = router;