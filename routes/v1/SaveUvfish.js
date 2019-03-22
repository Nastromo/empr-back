const express = require('express');
const router = express.Router();
const { Uvfish, UvfishEdits } = require('../../db');



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
    await Uvfish.update( req.body, { where: { access: req.body.access } });
    await UvfishEdits.create(req.body);
    const list = await Uvfish.findAll({ where: {stage: `pending`} });
    res.json(list);
})
);




module.exports = router;