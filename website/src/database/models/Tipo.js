module.exports = (sequelize, dataTypes) => {
    const alias = "Tipos"

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
        }
    }

    const config = {
        tableName: "tipos",
        timestamps: false
    }

    const Tipo = sequelize.define(alias, cols, config)

    Tipo.associate = function (models) {
        Tipo.hasMany(models.Usuarios, {
            as: "tipoUsuario",
            foreignKey: "tipo_id"
        })
    }
}