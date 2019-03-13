const Sequelize = require('sequelize');
const UserModel = require('./models/Users');
const GynModel = require('./models/Gyn');
const { alex, samanta } = require('./generateFakeGyn');
const bcrypt = require('bcrypt');



const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        supportBigNumbers: true,
    },
    operatorsAliases: false,
    define: {
        timestamps: false,
        freezeTableName: true,
    },
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
})

// superuser
// art
// art
// $2b$08$M/vvOrPqspbpKUNt0dKLA.SZOuDXYx731LTD9pvtsZMkZWljasSzi

const User = UserModel(db, Sequelize);
const Gyn = GynModel(db, Sequelize);

const syncDB = async () => {
    try {
        if (process.env.NODE_ENV === `production`) {
            if (false) {
                await Gyn.create(alex);
                await Gyn.create(samanta);
            }
            return await db.sync();
        } else {
            // console.log(await bcrypt.hash(`art`, 8));
            if (false) {
                await Gyn.create(alex);
                await Gyn.create(samanta);
            }
            return await db.sync({ force: false, match: /_dev$/ });
        }
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    db,
    User,
    Gyn,
    syncDB
}