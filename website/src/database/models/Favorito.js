module.exports = (sequelize, dataTypes) => {
    const alias = "Favoritos"

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        }//,
        // UsuarioId: {
        //     type: dataTypes.INTEGER,
        //     allowNull: false
        // },
        // VinoId: {
        //     type: dataTypes.INTEGER,
        //     allowNull: false
        // }
    }

    const config = {
        tableName: "favoritos",
        timestamps: false
    }

    const Favorito = sequelize.define(alias, cols, config);

    return Favorito
}