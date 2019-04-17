module.exports = (db, type) => {
    return db.define('ngyn', {
        masterAccess: {
            type: type.STRING,
            allowNull: false,
        },
        access: {
            type: type.STRING,
            allowNull: false,
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
            type: type.TEXT,
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
            type: type.TEXT,
            allowNull: true,
            defaultValue: ``
        },
        preAnalysis: {
            type: type.STRING,
            allowNull: true,
            defaultValue: `[]`
        },
        reportComments: {
            type: type.TEXT,
            allowNull: true,
            defaultValue: `[]`
        },
        processor: {
            type: type.STRING,
            allowNull: true,
        },
        stainMethod: {
            type: type.STRING,
            allowNull: true,
        },
        nuclear: {
            type: type.STRING,
            allowNull: true,
        },
        cytoplasmic: {
            type: type.STRING,
            allowNull: true,
        },
        prepQuality: {
            type: type.STRING,
            allowNull: true,
        },
        contamination: {
            type: type.STRING,
            allowNull: true,
        },
        qcResults: {
            type: type.STRING,
            allowNull: true,
        },
        qcComment: {
            type: type.STRING,
            allowNull: true,
        },
    })
}