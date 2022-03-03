const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const usuarios = await db.Usuarios.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );

        let usuarios2 = [];

        for (const usuario of usuarios) {
            usuarios2.push(usuario.dataValues)
        }
        for (const usuario2 of usuarios2) {
            usuario2.detail = 'localhost:3001/api/usuarios/' + usuario2.id
            usuario2.imagen = 'localhost:3001' + usuario2.imagen
            delete usuario2.contrasenia
        }


        let respuesta = {
            meta: {
                status: 200,
                total: usuarios2.length,
                url: "api/usuarios",
            },
            data: usuarios2,
        };

        res.json(respuesta);
    },
    detail: async (req, res) => {
        const usuario = await db.Usuarios.findOne(
            { where: { id: req.params.id } },
            { include: { all: true } }
        );

        delete usuario.contrasenia
        usuario.imagen = 'localhost:3001' + usuario.imagen


        let respuesta = {
            meta: {
                status: 200,
                url: "localhost:3001/api/usuarios/" + usuario.id,
            },
            data: usuario,
        };

        res.json(respuesta);
    },
};
