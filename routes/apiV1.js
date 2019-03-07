const login = require('./v1/Login');
const user = require('./v1/User');



const apiV1 = (app) => {
    app.use(`/v1/login`, login);
    app.use(`/v1/user`, user);

}

module.exports = apiV1;
