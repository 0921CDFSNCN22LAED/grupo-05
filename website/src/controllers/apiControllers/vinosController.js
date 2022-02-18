const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const vinos = await db.Vinos.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );

        let respuesta = {
            meta: {
                status : 200,
                total: vinos.length,
                url: 'api/vinos'
            },
            data: vinos
        }

        res.json(respuesta);
    },
};
