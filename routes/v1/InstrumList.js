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
    res.json(await Instrument.findAll({raw: true}));
})
);

router.post('/', errorHandler(async (req, res, next) => {
    const { title } = req.body;
    await Instrument.destroy({where: {title}});
    res.json(await Instrument.findAll({raw: true}));
})
);




module.exports = router;