const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const jwt = require('jsonwebtoken');



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
    const { login, pass } = req.body;

    if (login && pass) {
        const user = await User.findOne({ where: { login }, raw: true});
        if (user) {
            const result = await bcrypt.compare(pass, user.pass);
            delete user.pass;
            user.token = await createToken(user.userId);
            if (result) res.json(user)
            else res.status(403).send(`Credentials are wrong`);
        } else {
            res.status(400).send(`No such user`);
        }
    } else {
        res.status(400).send(`Login and password are required`);
    }
})
);


const createToken = (userId) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ userId }, process.env.SECRET_KEY, (err, token) => {
            if (err) reject(err);
            else resolve(token);
        });
    });
}



module.exports = router;