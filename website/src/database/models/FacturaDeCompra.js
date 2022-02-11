module.exports = (sequelize, dataTypes) => {
    const alias = "FacturaDeCompras";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        info_Api_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };

    const config = {
        tableName: "factura_de_compras",
        timestamps: false,
    };

    const FacturaDeCompra = sequelize.define(alias, cols, config);

    return FacturaDeCompra;
};
