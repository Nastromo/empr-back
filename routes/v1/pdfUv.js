const express = require('express');
const router = express.Router();
const { UvfishPdf } = require('../../db');
const fs = require('fs');
const pdf = require('html-pdf');
const getHtml = require('../../html/GetHtmlUvFish')


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


router.get('/:id', errorHandler(async (req, res, next) => {
    const id = req.params.id;
    const data = await UvfishPdf.findOne({ where: { accessionID: id } });
    const html = getHtml(data);
    const options = { format: 'A4' };

    pdf.create(html, options).toFile(`./uploads/${data.caseNumber}.pdf`, function (err, res) {
        if (err) return console.log(err);
        console.log(res);
    });
})
);




module.exports = router;