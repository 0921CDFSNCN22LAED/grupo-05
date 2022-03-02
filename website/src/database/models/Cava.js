module.exports = (sequelize, dataTypes) => {
    const alias = "Cavas"

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
        tableName: "cavas",
        timestamps: false
    }

    const Cava = sequelize.define(alias, cols, config);

    return Cava
}