const productsService = require("../services/productsServices");
const vinos = productsService.getAll();
const db = require("../database/models");

const controladorHome = {
    index: async (req, res) => {
        //res.render("users/index", { vinos }); viejo crud
        db.Vinos.findAll()
            .then((vinos) => {
                res.render("users/index", {
                    vinos: vinos,
                    link: "/editarProductos/" + vinos.id,
                });
            })
            .catch((error) => {
                console.log(error);
            });

        //probando con async await. agregar async.
        /*const vinos = await db.Vinos.findAll();
        res.render("users/index", {
            vinos: vinos,
            link: "/editarProductos/" + vinos.id,
        });*/
    },
};

module.exports = controladorHome;
