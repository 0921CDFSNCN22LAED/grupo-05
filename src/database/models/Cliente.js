module.exports = (sequelize, dataTypes) => {
    const alias = "Clientes";

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
            type: dataTypes.STRING(200),
            allowNull: false,
        },
    };

    const config = {
        tableName: "clientes",
        timestamps: false,
    };

    const Cliente = sequelize.define(alias, cols, config);
    return Cliente;
};
