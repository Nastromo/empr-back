module.exports = (db, type) => {
    return db.define('uvfish', {
        masterAccess: {
            type: type.STRING,
            allowNull: false,
            unique: true,
        },
        access: {
            type: type.STRING,
            allowNull: false,
        },
        images: {
            type: type.STRING,
            allowNull: true,
        },
        status: {
            type: type.STRING,
            allowNull: true,
        },
        case: {
            type: type.STRING,
            allowNull: true,
        },
        stage: {
            type: type.STRING,
            allowNull: false,
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        lastName: {
            type: type.STRING,
            allowNull: false,
        },
        received: {
            type: type.BIGINT,
            allowNull: false,
        },
        lastUpdate: {
            type: type.BIGINT,
            allowNull: true,
        },
        updatedBy: {
            type: type.STRING,
            allowNull: true,
        },
        tray: {
            type: type.STRING,
            allowNull: false,
        },
        speci: {
            type: type.STRING,
            allowNull: false,
        },
        dob: {
            type: type.BIGINT,
            allowNull: false,
        },
        sex: {
            type: type.STRING,
            allowNull: false,
        },
        client: {
            type: type.STRING,
            allowNull: true,
        },
        physician: {
            type: type.STRING,
            allowNull: true,
        },
        requisitionPdf: {
            type: type.STRING,
            allowNull: true,
        },
        diagnosis: {
            type: type.STRING(6000),
            allowNull: true,
        },
        source: {
            type: type.STRING,
            allowNull: true,
        },
        receivedSource: {
            type: type.STRING,
            allowNull: true,
        },
        turbidity: {
            type: type.STRING,
            allowNull: true,
        },
        color: {
            type: type.STRING,
            allowNull: true,
        },
        specType: {
            type: type.STRING,
            allowNull: true,
        },
        fixative: {
            type: type.STRING,
            allowNull: true,
        },
        slideType: {
            type: type.STRING,
            allowNull: true,
        },
        ml: {
            type: type.STRING,
            allowNull: true,
        },
        grossOther: {
            type: type.STRING,
            allowNull: true,
            defaultValue: ``
        },
        instrumFirst: {
            type: type.STRING,
            allowNull: true,
        },
        instrumSecond: {
            type: type.STRING,
            allowNull: true,
        },
        slides: {
            type: type.STRING,
            allowNull: true,
        },
        testComment: {
            type: type.STRING(1000),
            allowNull: true,
            defaultValue: ``
        },
        preAnalysis: {
            type: type.STRING,
            allowNull: true,
            defaultValue: `[]`
        },
        reportComments: {
            type: type.STRING(2000),
            allowNull: true,
            defaultValue: `[]`
        },
        histologyCase: {
            type: type.STRING,
            allowNull: true,
        },
        molecular: {
            type: type.STRING,
            allowNull: true,
        },
        externalComment: {
            type: type.STRING(1000),
            allowNull: true,
            defaultValue: ``
        },
        internalComment: {
            type: type.STRING(1000),
            allowNull: true,
            defaultValue: ``
        },
        numberCells: {
            type: type.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        numberChroms: {
            type: type.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        numberZero: {
            type: type.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
    })
}