const login = require('./v1/Login');
const user = require('./v1/User');
const pending = require('./v1/Pending');
const saveGyn = require('./v1/SaveGyn');
const submitGyn = require('./v1/SubmitGyn');
const instruments = require('./v1/Instruments');
const instrumList = require('./v1/InstrumList');
const getUsers = require('./v1/GetUsers');
const saveNgyn = require('./v1/SaveNgyn');
const submitNgyn = require('./v1/SubmitNgyn');




const apiV1 = (app) => {
    app.use(`/v1/login`, login);
    app.use(`/v1/user`, user);
    app.use(`/v1/pending`, pending);
    app.use(`/v1/instruments`, instruments);
    app.use(`/v1/instrum-list`, instrumList);
    app.use(`/v1/save-gyn`, saveGyn);
    app.use(`/v1/submit-gyn`, submitGyn);
    app.use(`/v1/get-users`, getUsers);
    app.use(`/v1/save-ngyn`, saveNgyn);
    app.use(`/v1/submit-ngyn`, submitNgyn);
}

module.exports = apiV1;
