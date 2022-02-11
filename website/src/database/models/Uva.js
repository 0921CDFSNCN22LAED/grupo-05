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

    /*
    Uva.associate = (models)=>{
        Uva.hasMany(models.Vino), {
            as: 'uvaVino',
            foreignKey: 'uva_id'
        }
    }
    */ //Relación de uva y vinos. Una uva -varietal- tiene muchos vinos.

    return Uva;
};
