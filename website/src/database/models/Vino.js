const Bodega = require("./Bodega");

module.exports = (sequelize, dataTypes) => {
    const alias = "Vinos";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING(600),
            allowNull: false,
        },
        bodega_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        anio: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        descripcion: {
            type: dataTypes.STRING(600),
            allowNull: true,
        },
        precio: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        imagen: {
            type: dataTypes.STRING(200),
            allowNull: false,
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        uva_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        categoria_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };

    const config = {
        tableName: "vinos",
        timestamps: false,
    };

    const Vino = sequelize.define(alias, cols, config);

    //Relación de vinos y bodegas. Un/os vino/s pertenece/n a una bodega.
    Vino.associate = function (models) {
        Vino.belongsTo(models.Bodegas, {
            as: "vinoBodega",
            foreignKey: "bodega_id",
        });
        Vino.belongsTo(models.Categorias, {
            as: "vinoCategoria",
            foreignKey: "categoria_id",
        });
        Vino.belongsTo(models.Uvas, {
            as: "vinoUva",
            foreignKey: "uva_id",
        });
        Vino.belongsToMany(models.Usuarios, {
            through: models.Cavas,
            as: 'usuario_id'
        })
    };


    return Vino;
};
1;
