const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const usaurios = await db.Usuarios.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );

        let respuesta = {
            meta: {
                status : 200,
                total: usaurios.length,
                url: 'api/usuarios'
            },
            data: usaurios
        }

        res.json(respuesta);
    },
};
