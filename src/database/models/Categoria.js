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
        timesTamps: false,
    };

    const Categoria = sequelize.define(alias, cols, config);
    return Categoria;
};