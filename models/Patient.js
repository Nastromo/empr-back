module.exports = (db, type) => {
    return db.define('patient', {
        access: {
            type: type.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: false,
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        addingDate: {
            type: type.BIGINT,
            allowNull: false,
        },
        tray: {
            type: type.STRING,
            allowNull: false,
        },
        speci: {
            type: type.STRING,
            allowNull: false,
        }
    })
}