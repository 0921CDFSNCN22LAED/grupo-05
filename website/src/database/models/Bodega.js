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
        timestamps: false,
    };

    const Bodega = sequelize.define(alias, cols, config);

    //Relación de bodegas y vinos. Una bodega tiene muchos vinos.
    Bodega.associate = function (models) {
        Bodega.hasMany(models.Vinos, {
            as: "bodegaVino",
            foreignKey: "bodega_id",
        });
    };

    return Bodega;
};
