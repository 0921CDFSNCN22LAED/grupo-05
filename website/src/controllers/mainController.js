const db = require("../database/models");

const controladorHome = {
    index: async (req, res) => {
        try {
            const vinos = await db.Vinos.findAll({
                include: [
                    { association: "vinoBodega" },
                    { association: "vinoCategoria" },
                ],
                order: [["nombre", "ASC"]],
            });
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
