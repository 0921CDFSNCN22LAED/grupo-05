module.exports = (sequelize, dataTypes) => {
    const alias = "Carrito";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        cliente_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        vino_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };

    const config = {
        tableName: "carrito",
        timestamps: false,
    };

    const Carrito = sequelize.define(alias, cols, config);
    /* Carrito.associate = function (models){
        Carrito.belongsTo(models.Cliente,{
            as: "cliente",
            foreignKey: "user_id",
        });
        Carrito.belongsToMany(models.Vino,{
            as: "carrito",
            through: "vino_carrito",
            foreignKey: "carrito_id",
            otherkey: "vino_id",
        });
    }; */
    return Carrito;
};
