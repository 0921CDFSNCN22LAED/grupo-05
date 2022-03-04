module.exports = (sequelize, dataTypes) => {
    const alias = "Usuarios";

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
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        tipo_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        imagen: {
            type: dataTypes.STRING(200),
            allowNull: false,
        },
    };

    const config = {
        tableName: "usuarios",
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.belongsTo(models.Tipos, {
            as: "usuarioTipo",
            foreignKey: "tipo_id",
        });
        Usuario.belongsToMany(models.Vinos, {
            through: models.Cavas,
            as: "cava_id",
        });
        Usuario.belongsToMany(models.Vinos, {
            through: models.Favoritos,
            as: "favorito_id",
        });
    };

    return Usuario;
};
