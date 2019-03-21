const express = require('express');
const router = express.Router();
const { User } = require('../../db');
const bcrypt = require('bcryptjs');



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
    if (req.user) res.json(req.user);
    else res.status(403).send(`No such user`)
})
);

router.post('/', errorHandler(async (req, res, next) => {
    const { userRole, regDate, login, pass } = req.body;
    await User.create({
        userRole,
        regDate,
        login,
        pass: await bcrypt.hash(pass, 8)
    });
    res.json(await User.findAll({raw: true}));
})
);




module.exports = router;