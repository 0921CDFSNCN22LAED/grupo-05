module.exports = (sequelize, dataTypes) => {
    const Administrador = sequelize.define(
        "Administradores",
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
            tableName: "Administradores",
            timesTamps: false
        }
    );
    return Administrador
}