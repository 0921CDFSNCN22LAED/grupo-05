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
        timestamps: false,
    };

    const Uva = sequelize.define(alias, cols, config);

    //Relación de uva y vinos. Una uva -varietal- tiene muchos vinos.
    Uva.associate = function (models) {
        Uva.hasMany(models.Vinos, {
            as: "uvaVino",
            foreignKey: "uva_id",
        });
    };

    return Uva;
};
