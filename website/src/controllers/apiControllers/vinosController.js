const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const vinos = await db.Vinos.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );

        let respuesta = {
            meta: {
                status: 200,
                total: vinos.length,
                url: "api/vinos",
            },
            data: vinos,
        };

        res.json(respuesta);
    },

    detail: async (req, res) => {
        const vino = await db.Vinos.findOne(
            { where: { id: req.params.id } },
            { include: { all: true } }
        );

        let respuesta = {
            meta: {
                status: 200,
                url: "api/vinos/:id",
            },
            data: vino,
        };

        res.json(respuesta);
    },
};
