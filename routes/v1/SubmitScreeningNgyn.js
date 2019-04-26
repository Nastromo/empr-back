const express = require('express');
const router = express.Router();
const { Gyn, GynEdits, db } = require('../../db');
const moment = require('moment');
const Op = db.Op;




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
    
})
);




module.exports = router;