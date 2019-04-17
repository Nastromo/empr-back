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
    const startOfDate = moment().startOf('day').valueOf();
    const endOfDate = moment().endOf('day').valueOf();

    const stainQc = await Gyn.findAll({
        where: {
            stage: `pending stain qc`,
            lastUpdate: {
                [Op.between]: [startOfDate, endOfDate]
            }
        }
    });

    if (stainQc.length < 2) {
        req.body.stage = `pending stain qc`;
        await Gyn.update(req.body, { where: { access: req.body.access } });
        await GynEdits.create(req.body);
    } else {
        await Gyn.update(req.body, { where: { access: req.body.access } });
        await GynEdits.create(req.body);
    }

    const list = await Gyn.findAll({ where: { stage: `pending` } });
    res.json(list);
})
);




module.exports = router;