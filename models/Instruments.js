module.exports = (db, type) => {
    return db.define('instruments', {
        type: {
            type: type.STRING,
            allowNull: false,
        },
        title: {
            type: type.STRING,
            unique: true,
            allowNull: false,
        },
        isAvailable: {
            type: type.BOOLEAN,
            allowNull: false,
        },
        addDate: {
            type: type.BIGINT,
            allowNull: false,
        },
        user: {
            type: type.STRING,
            allowNull: true,
        },
    })
}