const express = require('express');
const router = express.Router();
const { User } = require('../../db');



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
        case `/v1/delete-gyn`:
            await Gyn.update(req.body, { where: { access: req.body.access } });
            await GynEdits.create(req.body);
            break;
        case `/v1/delete-ngyn`:
            await Ngyn.update(req.body, { where: { access: req.body.access } });
            await NgynEdits.create(req.body);
            break;
        case `/v1/delete-uvfish`:
            await Uvfish.update(req.body, { where: { access: req.body.access } });
            await UvfishEdits.create(req.body);
            break;
        default: break;
    }
})
);




module.exports = router;