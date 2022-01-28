module.exports = (sequelize, dataTypes) => {
    const Uva = sequelize.define(
        "Uvas",
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
            tableName: "Uvas",
            timesTamps: false
        }
    );
    return Uva
}