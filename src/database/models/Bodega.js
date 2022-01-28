module.exports = (sequelize, dataTypes) => {
    const alias = "Bodegas";

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
        tableName: "bodegas",
        timesTamps: false,
    };

    const Bodega = sequelize.define(alias, cols, config);
    return Bodega;
};
