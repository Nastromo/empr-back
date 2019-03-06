module.exports = (db, type) => {
    return db.define('users', {
        userId: {
            type: type.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: false,
        },
        userRole: {
            type: type.STRING,
            allowNull: false,
        },
        regDate: {
            type: type.BIGINT,
            allowNull: false,
        },
        login: {
            type: type.STRING,
            allowNull: true,
            unique: true,
        },
        pass: {
            type: type.STRING,
            allowNull: false,
        }
    })
}