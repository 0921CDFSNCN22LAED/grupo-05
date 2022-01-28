module.exports = (sequelize, dataTypes) => {
    const Carrito = sequelize.define(
        "Carrito",
        {
            id: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            cliente_id: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            vino_id: {
                type: dataTypes.INTEGER,
                allowNull: false
            },

        },
        {
            tableName: "Carrito",
            timesTamps: false
        }
    );
    return Carrito
}