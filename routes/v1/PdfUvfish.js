const express = require('express');
const router = express.Router();
const { UvfishPdf } = require('../../db');



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
    const accession = req.body.accession;
    const pdf = await UvfishPdf.findOne({ where: { accessionID: accession } });
    res.json(pdf);
})
);




module.exports = router;