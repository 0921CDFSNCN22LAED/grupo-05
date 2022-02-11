module.exports = (sequelize, dataTypes) => {
    const alias = "Categorias";

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
        tableName: "categorias",
        timestamps: false,
    };

    const Categoria = sequelize.define(alias, cols, config);

    //Relación de categoria y vinos. Una categoría tiene muchos vinos.
    Categoria.associate = function (models) {
        Categoria.hasMany(models.Vinos, {
            as: "categoriaVino",
            foreignKey: "categoria_id",
        });
    };

    return Categoria;
};
