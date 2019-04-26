const express = require('express');
const router = express.Router();
const { Gyn, GynEdits, Ngyn, NgynEdits, Uvfish, UvfishEdits } = require('../../db');



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
    switch (req.originalUrl) {
        case `/v1/cancel-gyn`:
            await Gyn.update(req.body, { where: { access: req.body.access } });
            await GynEdits.create(req.body);
            break;
        case `/v1/cancel-ngyn`:
            await Ngyn.update(req.body, { where: { access: req.body.access } });
            await NgynEdits.create(req.body);
            break;
        case `/v1/cancel-uvfish`:
            await Uvfish.update(req.body, { where: { access: req.body.access } });
            await UvfishEdits.create(req.body);
            break;
        default: break;
    }
    res.status(200).end();
})
);




module.exports = router;