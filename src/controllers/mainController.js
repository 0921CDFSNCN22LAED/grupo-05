const productsService = require("../services/productsServices");
const vinos = productsService.getAll();
const db = require("../database/models");

const controladorHome = {
    index: (req, res) => {
        //res.render("users/index", { vinos });
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
    },
};

module.exports = controladorHome;
