const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const uvas = await db.Uvas.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );

        let respuesta = {
            meta: {
                status: 200,
                total: uvas.length,
                url: "api/uvas",
            },
            data: uvas,
        };

        res.json(respuesta);
    }
};