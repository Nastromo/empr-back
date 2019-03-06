const login = require('./v1/Login');



const apiV1 = (app) => {
    app.use(`/v1/login`, login);

}

module.exports = apiV1;
