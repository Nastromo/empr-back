const Sequelize = require('sequelize');
const UserModel = require('./models/Users');
const GynModel = require('./models/Gyn');
const GynEditsModel = require('./models/GynEdits');
const InstrumentModel = require('./models/Instruments');
const { alex, samanta, vivi, coco, soso, lala, toto, caca } = require('./generateFakeGyn');
const NgynModel = require('./models/Ngyn');
const NgynEditsModel = require('./models/NgynEdits');
const UvfishModel = require('./models/Uvfish');
const UvfishEditsModel = require('./models/UvfishEdits');
const CllModel = require('./models/Cll');
const CllEditsModel = require('./models/CllEdits');



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
    query: { raw: true }
})

// art
// $2b$08$M/vvOrPqspbpKUNt0dKLA.SZOuDXYx731LTD9pvtsZMkZWljasSzi

// vlad
// $2b$08$M/vvOrPqspbpKUNt0dKLA.SZOuDXYx731LTD9pvtsZMkZWljasSzi

const User = UserModel(db, Sequelize);
const Gyn = GynModel(db, Sequelize);
const GynEdits = GynEditsModel(db, Sequelize);
const Instrument = InstrumentModel(db, Sequelize);
const Ngyn = NgynModel(db, Sequelize);
const NgynEdits = NgynEditsModel(db, Sequelize);
const Uvfish = UvfishModel(db, Sequelize);
const UvfishEdits = UvfishEditsModel(db, Sequelize);
const Cll = CllModel(db, Sequelize);
const CllEdits = CllEditsModel(db, Sequelize);



const syncDB = async () => {
    try {
        if (process.env.NODE_ENV === `production`) await db.sync();
        else await db.sync({ force: false });

        // console.log(await bcrypt.hash(`vlad`, 8));

        if (false) {
            await Gyn.create(alex);
            await Gyn.create(samanta);
            await Ngyn.create(vivi);
            await Ngyn.create(coco);
            await Uvfish.create(soso);
            await Uvfish.create(lala);
            await Cll.create(toto);
            await Cll.create(caca);
            createInstruments();
        }
        return new Promise(resolve => resolve());
    } catch (err) {
        console.log(err);
    }
}


const createInstruments = () => {
    Instrument.create({
        type: `Whater bath`,
        title: `Anova Whater Bath`
    })
    Instrument.create({
        type: `Whater bath`,
        title: `Fisher Whater Bath`
    })
    Instrument.create({
        type: `Centrifuge`,
        title: `Centrifuge #1`
    })
    Instrument.create({
        type: `Centrifuge`,
        title: `Centrifuge #2`
    })
    Instrument.create({
        type: `Hybridizer`,
        title: `Abbott Termobrite #1`
    })
    Instrument.create({
        type: `Hybridizer`,
        title: `Abbott Termobrite #2`
    })
    Instrument.create({
        type: `Imager`,
        title: `Hologic Imager`
    })
    Instrument.create({
        type: `Coverslipper`,
        title: `Manual Coverslipper`
    })
    Instrument.create({
        type: `Coverslipper`,
        title: `Sacura Coverslipper`
    })
    Instrument.create({
        type: `Stainer`,
        title: `Manual Staining`
    })
    Instrument.create({
        type: `Stainer`,
        title: `Abbott VP2000`
    })
    Instrument.create({
        type: `Stainer`,
        title: `Sakura Stainer`
    })
    Instrument.create({
        type: `Processor`,
        title: `T2000 #1`
    })
    Instrument.create({
        type: `Processor`,
        title: `T2000 #2`
    })
}


module.exports = {
    db,
    User,
    Gyn,
    GynEdits,
    Instrument,
    Ngyn,
    NgynEdits,
    Uvfish,
    UvfishEdits,
    Cll,
    CllEdits,
    syncDB
}
