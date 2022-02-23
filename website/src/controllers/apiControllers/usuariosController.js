const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const usuarios = await db.Usuarios.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );

        let respuesta = {
            meta: {
                status: 200,
                total: usuarios.length,
                url: "api/usuarios",
            },
            data: usuarios,
        };

        res.json(respuesta);
    },
    detail: async (req, res) => {
        const usuario = await db.Usuarios.findOne(
            { where: { id: req.params.id } },
            { include: { all: true } }
        );

        let respuesta = {
            meta: {
                status: 200,
                url: "api/usuarios/:id",
            },
            data: usuario,
        };

        res.json(respuesta);
    },
};
