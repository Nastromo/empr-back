const express = require('express');
const router = express.Router();
const { User } = require('../../db');



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
    res.json(await User.findAll({raw: true}));
})
);


router.post('/', errorHandler(async (req, res, next) => {
    const { login }  = req.body;
    await User.destroy({where: {login}});
    res.json(await User.findAll({raw: true}));
})
);



module.exports = router;