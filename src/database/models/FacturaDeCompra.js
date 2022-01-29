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
