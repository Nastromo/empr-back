const login = require('./v1/Login');
const user = require('./v1/User');
const pending = require('./v1/Pending');



const apiV1 = (app) => {
    app.use(`/v1/login`, login);
    app.use(`/v1/user`, user);
    app.use(`/v1/pending`, pending);
}

module.exports = apiV1;
