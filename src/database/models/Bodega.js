module.exports = (sequelize, dataTypes) => {
    const Bodega = sequelize.define(
        "Bodegas",
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
            tableName: "Bodegas",
            timesTamps: false
        }
    );
    return Bodega
}