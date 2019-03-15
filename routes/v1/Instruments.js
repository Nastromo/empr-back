const express = require('express');
const router = express.Router();
const { Instrument, Gyn } = require('../../db');



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
    const { access, title, action, i } = req.body;
    const user = req.user.login;

    if (action === `add`) {
        const count = await Instrument.count({ where: { user }, raw: true });
        if (count !== 2) {
            const instrument = await Instrument.findOne({ where: { title }, raw: true });
            if (instrument.isAvailable) {
                res.status(200).end();
                // await Instrument.update({ isAvailable: false, user }, { where: { title } });
                // if (i === 1) await Gyn.update({ instrumFirst: title }, { where: { access } });
                // else await Gyn.update({ instrumSecond: title }, { where: { access } });
                // const gyn = await Gyn.findOne({ where: { access }, raw: true });
                // const instrums = {
                //     first: gyn.instrumFirst,
                //     second: gyn.instrumSecond,
                // }
                // res.json(instrums);
            } else {
                throw new Error(`This instrument is already in use`);
            }
        } else {
            throw new Error(`You can't select more than 2 instrument`);
        }
    } else {
        await Instrument.update({ isAvailable: true, user: null }, { where: { title } });
        if (i === 1) await Gyn.update({ instrumFirst: null }, { where: { access } });
        else await Gyn.update({ instrumSecond: null }, { where: { access } });
        const gyn = await Gyn.findOne({ where: { access }, raw: true });

        const instrums = {
            first: gyn.instrumFirst,
            second: gyn.instrumSecond,
        }

        res.json(instrums);
    }
})
);

(async () => {
    const instrums = await Gyn.findOne({ where: { access: `19032019234` }, raw: true })
    console.log(instrums.instruments)
})()

module.exports = router;