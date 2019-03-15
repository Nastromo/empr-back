module.exports = (db, type) => {
    return db.define('gyn', {
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
            type: type.STRING(6000),
            allowNull: true,
        },
        patientHistory: {
            type: type.STRING,
            allowNull: true,
        },
        lmpDate: {
            type: type.BIGINT,
            allowNull: true,
        },
        routineScreen: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        abnormalBleeding: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        highRisk: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        discharge: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        previousDysplasia: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        hysterectomy: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        vaginitis: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        radiationTherapy: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        iudInplace: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        hrt: {
            type: type.BOOLEAN,
            allowNull: true,
        },
        yearsMenopausal: {
            type: type.INTEGER,
            allowNull: true,
        },
        previousPapDate: {
            type: type.BIGINT,
            allowNull: true,
        },
        previousPapDiagnosis: {
            type: type.STRING,
            allowNull: true,
        },
        specimenSource: {
            type: type.STRING,
            allowNull: true,
        },
        specimenReceived: {
            type: type.STRING,
            allowNull: true,
        },
        other: {
            type: type.STRING,
            allowNull: true,
        },
        instrumFirst: {
            type: type.STRING,
            allowNull: true,
        },
        instrumSecond: {
            type: type.STRING,
            allowNull: true,
        },
        testComment: {
            type: type.STRING(1000),
            allowNull: true,
        }
    })
}