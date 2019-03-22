const express = require('express');
const router = express.Router();
const { Ngyn, NgynEdits } = require('../../db');



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
    await Ngyn.update( req.body, { where: { access: req.body.access } });
    await NgynEdits.create(req.body);
    const list = await Ngyn.findAll({ where: {stage: `pending`} });
    res.json(list);
})
);




module.exports = router;