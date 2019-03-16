const express = require('express');
const router = express.Router();
const { Instrument } = require('../../db');



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



router.get('/', errorHandler(async (req, res, next) => {
    const agg = await Instrument.aggregate('type', 'DISTINCT', { plain: false });
    const instrums = await Instrument.findAll({ raw: true });
    let types = [];
    for (let i = 0; i < agg.length; i++) types.push(agg[i].DISTINCT);
    res.json({
        types,
        instrums
    });
})
);



module.exports = router;