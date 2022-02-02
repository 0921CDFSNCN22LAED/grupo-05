module.exports = (sequelize, dataTypes) => {
    const alias = "FacturaDeCompras";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        codigo_postal: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        fecha_compra: {
            type: dataTypes.DATEONLY,
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
        total: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };

    const config = {
        tableName: "factura_de_compras",
        timestamps: false,
    };

    const FacturaDeCompra = sequelize.define(alias, cols, config);

    /*
    FacturaDeCompra.associate = (models)=>{
        FacturaDeCompra.hasMany(models.Vino), {
            as: 'facturaVino',
            foreignKey: 'vino_id'
        }
    }
    */ //Relación de facturas de compra y vinos. Una factura de compra tiene muchos vinos.

    return FacturaDeCompra;
};
