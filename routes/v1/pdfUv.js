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

    console.log(data.caseNumber);

    pdf.create(html, options)
        .toFile(`../uvfish_pdf/MPDF/cytology-reports/uvfish/${data.caseNumber}.pdf`, function (err, rez) {
            if (err) {
                console.log(err);
                throw new Error('PDF generation error');
            } else {
                console.log(rez);
                res.status(200).end();
            }
        });


})
);




module.exports = router;