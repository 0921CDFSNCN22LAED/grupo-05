const db = require("../../database/models");
module.exports = {
    listar: async (req, res) => {
        const vinos = await db.Vinos.findAll(
            { include: { all: true } },
            { order: [["nombre", "ASC"]] }
        );

        let zuccardi = 0
        let catenaZapata = 0
        let trapiche = 0
        let elEnemigo = 0
        let elEsteco = 0
        let salentein = 0
        let luigiBosca = 0

        for (let vino of vinos) {
            if (vino.vinoBodega.nombre == 'Zuccardi'){
                zuccardi++
            } else if (vino.vinoBodega.nombre == 'Catena Zapata'){
                catenaZapata++
            } else if (vino.vinoBodega.nombre == 'Trapiche'){
                trapiche++
            } else if (vino.vinoBodega.nombre == 'El Enemigo'){
                elEnemigo++
            } else if (vino.vinoBodega.nombre == 'El Esteco'){
                elEsteco++
            } else if (vino.vinoBodega.nombre == 'Salentein'){
                salentein++
            } else if (vino.vinoBodega.nombre == 'Luigi Bosca'){
                luigiBosca++
            }
        }

        let malbec = 0 
        let bonarda = 0
        let cabernetSauvignon = 0
        let merlot = 0
        let syrah = 0
        let pinotNoir = 0
        let chardonnay = 0

        for (let vino of vinos) {
            if (vino.vinoUva.nombre == 'Malbec'){
                malbec++
            } else if (vino.vinoUva.nombre == 'Bonarda'){
                bonarda++
            } else if (vino.vinoUva.nombre == 'Cabernet Sauvignon'){
                cabernetSauvignon++
            } else if (vino.vinoUva.nombre == 'Merlot'){
                merlot++
            } else if (vino.vinoUva.nombre == 'Syrah'){
                syrah++
            } else if (vino.vinoUva.nombre == 'Pinot Noir'){
                pinotNoir++
            } else if (vino.vinoUva.nombre == 'Chardonnay'){
                chardonnay++
            }
        }

        let destacados = 0
        let vendidos = 0
        let economicos = 0

        for (let vino of vinos) {
            if (vino.vinoCategoria.nombre == 'Destacados'){
                destacados++
            } else if (vino.vinoCategoria.nombre == '+ Vendidos'){
                vendidos++
            } else if (vino.vinoCategoria.nombre == '+ Económicos'){
                economicos++
            }
        }
        
        for (let vino of vinos) {
            vino.imagen = 'localhost:3001' + vino.imagen
            vino.dataValues.detail = 'localhost:3001/api/vinos/' + vino.id

            for (let usuario of vino.usuario_cava_id) {
                delete usuario.dataValues.contrasenia
            }
            for (let usuario of vino.usuario_favorito_id) {
                delete usuario.dataValues.contrasenia
            }
        }


        let respuesta = {
            meta: {
                status: 200,
                total: vinos.length,
                url: "api/vinos",
            },
            countByCategory: {
                uvas: {malbec, bonarda, cabernetSauvignon, merlot, syrah, pinotNoir, chardonnay},
                bodegas: {zuccardi, catenaZapata, trapiche, elEnemigo, elEsteco, salentein, luigiBosca},
                categorias: {vendidos, economicos, destacados}
            },
            relations: ['vinoBodega', 'vinoUva', 'vinoCategoria'],
            data: vinos,
        };

        res.json(respuesta);
    },

    detail: async (req, res) => {
        const vino = await db.Vinos.findOne(
            { include: { all: true } },
            { where: { id: req.params.id } }
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

    //Falta array por cada relación
};
