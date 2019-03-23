const express = require('express');
const router = express.Router();
const { Uvfish, Cll } = require('../../db');



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
        case `UVFISH`:
            res.json(await Uvfish.findAll({ where: { stage: `processing` } }));
            break;
        case `CLL`:
            res.json(await Cll.findAll({ where: { stage: `processing` } }));
            break;
        default: break;
    }
})
);




module.exports = router;