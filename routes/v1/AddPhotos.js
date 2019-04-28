const express = require('express');
const router = express.Router();
const { Gyn, GynEdits } = require('../../db');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })



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


router.post('/', upload.array('image'), errorHandler(async (req, res, next) => {
    res.status(200).end();
})
);




module.exports = router;