const db = require("../database/models");

const controladorHome = {
    index: async (req, res) => {
        try {
            const vinos = await db.Vinos.findAll();
            res.render("users/index", {
                vinos: vinos,
                link: "/detalle/" + vinos.id,
            });
        } catch (error) {
            console.error(error);
        }
    },
};

module.exports = controladorHome;
