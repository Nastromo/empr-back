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
const saveUvfish = require('./v1/SaveUvfish');
const submitUvfish = require('./v1/SubmitUvfish');
const processing = require('./v1/Processing');
const screening = require('./v1/Screening');
const stainQc = require('./v1/StainQcz');
const submitGynStainQc = require('./v1/SubmitGynStainQc');



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
    app.use(`/v1/save-uvfish`, saveUvfish);
    app.use(`/v1/submit-uvfish`, submitUvfish);
    app.use(`/v1/processing`, processing);
    app.use(`/v1/screening`, screening);
    app.use(`/v1/stain-qc`, stainQc);
    app.use(`/v1/submit-gyn-stain-qc`, submitGynStainQc);
    
   
}

module.exports = apiV1;
