const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const categorias = await db.Categorias.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );

        let respuesta = {
            meta: {
                status: 200,
                total: categorias.length,
                url: "http://localhost:3001/api/categorias",
            },
            data: categorias,
        };

        res.json(respuesta);
    }
};