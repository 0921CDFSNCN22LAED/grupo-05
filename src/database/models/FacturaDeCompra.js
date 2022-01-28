module.exports = (sequelize, dataTypes) => {
    const alias = "FacturaDeCompras";

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
        email: {
            type: dataTypes.STRING(200),
            allowNull: false,
            unique: true,
        },
        contrasenia: {
            type: dataTypes.STRING(200),
            allowNull: false,
        },
    };

    const config = {
        tableName: "factura_de_compras",
        timesTamps: false,
    };

    const FacturaDeCompra = sequelize.define(alias, cols, config);
    return FacturaDeCompra;
};
