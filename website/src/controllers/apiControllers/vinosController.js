const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const respuesta = await db.Vinos.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );
        res.json(respuesta);
    },
};
