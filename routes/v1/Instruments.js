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


router.post('/', errorHandler(async (req, res, next) => {
    const { type, title } = req.body;
    const instrum = await Instrument.findOrCreate({where: {title}, defaults: {type, title}, raw: true});
    if (instrum[1]) res.json(await Instrument.findAll({ raw: true }));
    else throw new Error(`This instrument name is already in use`);
})
);



module.exports = router;