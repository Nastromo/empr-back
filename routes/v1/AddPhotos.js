const express = require('express');
const router = express.Router();
const { Gyn, GynEdits } = require('../../db');
const multer = require('multer');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${global.projectRoot}/uploads`);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});


const upload = multer({ storage: storage });


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
    const names = [];
    for (let i = 0; i < req.files.length; i++) {
        names.push(req.files[i].filename);
    }
    const str = names.toString();
    switch (req.body.title) {
        case `0`:
            await Gyn.update({ images: str }, { where: { access: req.body.access } });
            await GynEdits.create({
                masterAccess: req.body.masterAccess,
                access: req.body.access,
                images: str,
                stage: req.body.stage, 
                name: req.body.name,
                lastName: req.body.lastName,
                received: req.body.received,
                tray: req.body.tray,
                speci: req.body.speci,
                dob: req.body.dob,
                sex: req.body.sex
            });
            break;
    }
    res.status(200).end();
})
);




module.exports = router;