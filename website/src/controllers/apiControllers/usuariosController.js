const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const usuarios = await db.Usuarios.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );


        for (const usuario of usuarios) {
            usuario.dataValues.detail = 'http://localhost:3001/api/usuarios/' + usuario.dataValues.id
            usuario.dataValues.imagen = 'http://localhost:3001' + usuario.dataValues.imagen
            delete usuario.dataValues.contrasenia
        }


        let respuesta = {
            meta: {
                status: 200,
                total: usuarios.length,
                url: "http://localhost:3001/api/usuarios",
            },
            data: usuarios,
        };

        res.json(respuesta);
    },
    detail: async (req, res) => {
        const usuario = await db.Usuarios.findByPk( req.params.id,
            { include: { all: true } }
        );

        delete usuario.contrasenia
        usuario.imagen = 'http://localhost:3001' + usuario.imagen


        let respuesta = {
            meta: {
                status: 200,
                url: "http://localhost:3001/api/usuarios/" + usuario.id,
            },
            data: usuario,
        };

        res.json(respuesta);
    },
};
