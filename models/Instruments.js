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
        }
    })
}