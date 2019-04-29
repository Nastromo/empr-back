require('dotenv').config();
global.projectRoot = __dirname;
const path = require('path');
const express = require('express');
const { syncDB } = require('./db');
const cors = require('cors');
const apiV1 = require('./routes/apiV1');
const checkRequest = require('./middleware/CheckRequest');

const app = express();
const dir = path.join(__dirname, 'uploads');

app.use(cors());
app.use(express.static(dir));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(checkRequest);

console.log(process.env.NODE_ENV);
console.log(process.env.DB_USER);

apiV1(app);

(async () => {
    await syncDB();
    console.log(`${process.env.NODE_ENV} Database & tables created!`);

    const port = process.env.MY_PORT;
    if (process.env.NODE_ENV === 'production') {
        app.listen(port, '127.0.0.1', () => { console.log(`Prod Main Server listening ${port} port...`); });
    } else {
        app.listen(port, () => { console.log(`Dev Main Server listening ${port} port...`); });
    }
})();