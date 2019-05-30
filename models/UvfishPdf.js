module.exports = (db, type) => {
    return db.define('uvFishReports', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        accessionID: {
            type: type.STRING,
            allowNull: true,
        },
        caseNumber: {
            type: type.STRING,
            allowNull: true,
        },
        patientFirstName: {
            type: type.STRING,
            allowNull: true,
        },
        patientLastName: {
            type: type.STRING,
            allowNull: true,
        },
        dob: {
            type: type.BIGINT,
            allowNull: true,
        },
        gender: {
            type: type.STRING,
            allowNull: true,
        },
        patientPhone: {
            type: type.STRING,
            allowNull: true,
        },
        collectionDate: {
            type: type.BIGINT,
            allowNull: true,
        },
        receivedDate: {
            type: type.BIGINT,
            allowNull: true,
        },
        finaleDate: {
            type: type.BIGINT,
            allowNull: true,
        },
        physician: {
            type: type.STRING,
            allowNull: true,
        },
        clientID: {
            type: type.INTEGER,
            allowNull: true,
        },
        clientName: {
            type: type.STRING,
            allowNull: true,
        },
        clientName: {
            type: type.STRING,
            allowNull: true,
        },
        clientStreet: {
            type: type.STRING,
            allowNull: true,
        },
        clientCity: {
            type: type.STRING,
            allowNull: true,
        },
        clientState: {
            type: type.STRING,
            allowNull: true,
        },
        clientZip: {
            type: type.STRING,
            allowNull: true,
        },
        clientPhone: {
            type: type.STRING,
            allowNull: true,
        },
        totalCells: {
            type: type.INTEGER,
            allowNull: true,
        },
        cellsShowing: {
            type: type.INTEGER,
            allowNull: true,
        },
        cellsShowingZero: {
            type: type.INTEGER,
            allowNull: true,
        },
        interpretation: {
            type: type.STRING,
            allowNull: true,
        },
        screenedBy: {
            type: type.STRING,
            allowNull: true,
        },
        signedBy: {
            type: type.STRING,
            allowNull: true,
        },
        abnormalStatus: {
            type: type.STRING,
            allowNull: true,
        },
        comments: {
            type: type.STRING,
            allowNull: true,
        },
        printDate: {
            type: type.BIGINT,
            allowNull: true,
        },
    })
}