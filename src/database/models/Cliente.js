module.exports = (sequelize, dataTypes) => {
    const Cliente = sequelize.define(
        "Clientes",
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
            },
            email: {
                type: dataTypes.STRING(200),
                allowNull: false,
                unique: true
            },
            contrasenia: {
                type: dataTypes.STRING(200),
                allowNull: false
            }
        },
        {
            tableName: "Clientes",
            timesTamps: false
        }
    );
    return Cliente
}