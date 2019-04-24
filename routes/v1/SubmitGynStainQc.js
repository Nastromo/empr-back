const express = require('express');
const router = express.Router();
const { Gyn, GynEdits, db } = require('../../db');
const moment = require('moment');
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
    await Gyn.update(req.body, { where: { access: req.body.access } });
    await GynEdits.create(req.body);
    const list = await Gyn.findAll({ where: { stage: {
        [Op.like]: `%stain qc`
    } } });
    res.json(list);
})
);




module.exports = router;