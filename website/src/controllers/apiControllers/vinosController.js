const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const vinos = await db.Vinos.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );

        const bodegas = {};
        for (let vino of vinos) {
            if (!bodegas[vino.vinoBodega.nombre]) {
                bodegas[vino.vinoBodega.nombre] = 0;
            }
            bodegas[vino.vinoBodega.nombre]++;
        }

        const uvas = {};
        for (let vino of vinos) {
            if (!uvas[vino.vinoUva.nombre]) {
                uvas[vino.vinoUva.nombre] = 0;
            }
            uvas[vino.vinoUva.nombre]++;
        }

        const categorias = {};
        for (let vino of vinos) {
            if (!categorias[vino.vinoCategoria.nombre]) {
                categorias[vino.vinoCategoria.nombre] = 0;
            }
            categorias[vino.vinoCategoria.nombre]++;
        }

        for (let vino of vinos) {
            vino.imagen = "http://localhost:3001" + vino.imagen;
            vino.dataValues.detail =
                "http://localhost:3001/api/vinos/" + vino.id;

            for (let usuario of vino.usuario_cava_id) {
                delete usuario.dataValues.contrasenia;
            }
            for (let usuario of vino.usuario_favorito_id) {
                delete usuario.dataValues.contrasenia;
            }
        }

        let respuesta = {
            meta: {
                status: 200,
                total: vinos.length,
                url: "http://localhost:3001/api/vinos",
            },
            countByCategory: {
                bodegas,
                uvas,
                categorias,
            },
            relations: ["vinoBodega", "vinoUva", "vinoCategoria"],
            data: vinos,
        };

        res.json(respuesta);
    },

    detail: async (req, res) => {
        const vino = await db.Vinos.findByPk( req.params.id,
            { include: { all: true } }
        );

        vino.imagen = "http://localhost:3001" + vino.imagen

        let respuesta = {
            meta: {
                status: 200,
                url: "http://localhost:3001/api/vinos/:id",
            },
            data: vino,
        };

        res.json(respuesta);
    },
};
