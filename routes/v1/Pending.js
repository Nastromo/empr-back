const express = require('express');
const router = express.Router();
const { Patient } = require('../../db');



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
            res.json(await Patient.findAll());
            break;
        case `NGYN`:
            res.json(await Patient.findAll());
            break;
        case `UVFISH`:
            res.json(await Patient.findAll());
            break;
        case `CLL`:
            res.json(await Patient.findAll());
            break;
        default: break;
    }
})
);




module.exports = router;