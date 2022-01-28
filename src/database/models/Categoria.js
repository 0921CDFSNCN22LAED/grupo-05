module.exports = (sequelize, dataTypes) => {
    const Categoria = sequelize.define(
        "Categorias",
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            nombre: {
                type: dataTypes.STRING(200),
                allowNull: false
            }
        },
        {
            tableName: "Categorias",
            timesTamps: false
        }
    );
    return Categoria
}