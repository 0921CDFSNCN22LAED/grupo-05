const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const bodegas = await db.Bodegas.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );

        let respuesta = {
            meta: {
                status: 200,
                total: bodegas.length,
                url: "http://localhost:3001/api/bodegas",
            },
            data: bodegas,
        };

        res.json(respuesta);
    }
};