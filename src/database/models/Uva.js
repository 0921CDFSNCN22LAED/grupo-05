module.exports = (sequelize, dataTypes) => {
    const alias = "Uvas";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING(200),
            allowNull: false,
        },
    };

    const config = {
        tableName: "uvas",
        timesTamps: false,
    };

    const Uva = sequelize.define(alias, cols, config);
    return Uva;
};
