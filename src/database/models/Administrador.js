module.exports = (sequelize, dataTypes) => {
    const alias = "Administradores";

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
        tableName: "administradores",
        timesTamps: false,
    };

    const Administrador = sequelize.define(alias, cols, config);
    return Administrador;
};
