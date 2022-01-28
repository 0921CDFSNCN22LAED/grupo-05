module.exports = (sequelize, dataTypes) => {
    const alias = "Carrito";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        cliente_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        vino_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };

    const config = {
        tableName: "carrito",
        timesTamps: false,
    };

    const Carrito = sequelize.define(alias, cols, config);
    return Carrito;
};