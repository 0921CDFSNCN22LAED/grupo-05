module.exports = (sequelize, dataTypes) => {
    const alias = "Vinos";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: dataTypes.STRING(600),
            allowNull: false,
        },
        bodega_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        anio: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        descripcion: {
            type: dataTypes.STRING(600),
            allowNull: true,
        },
        precio: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        imagen: {
            type: dataTypes.STRING(200),
            allowNull: false,
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        uva_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        categoria_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
    };

    const config = {
        tableName: "vinos",
        timesTamps: false,
    };

    const Vino = sequelize.define(alias, cols, config);
    return Vino;
};
