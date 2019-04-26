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
    const submitDate = req.body.lastUpdate;
    const startOfDate = moment(submitDate).startOf('day').valueOf();
    const endOfDate = moment(submitDate).endOf('day').valueOf();

    const passedStainQc = await Gyn.findAll({
        where: {
            stage: {
                [Op.or]: [`Pass stain qc`, `pathologist`]
            },
            qcResults: `Pass`,
            lastUpdate: {
                [Op.between]: [startOfDate, endOfDate]
            }
        }
    });

    if (passedStainQc.length === 2) {
        await Gyn.update(req.body, { where: { access: req.body.access } });
        await GynEdits.create(req.body);
        res.status(200).end();
    } else {
        throw new Error(`Today's tests didn't pass Stain QC`);
    }
})
);




module.exports = router;