productsService = require("../services/productsServices");

vinos = productsService.getAll();

const productsController = {
  cava: (req, res) => {
    res.render("users/cava");
  },
  detalleProducto: (req, res) => {
    const id = req.params.id;
    const vino = vinos.find((vino) => {
      return id == vino.id;
    });
    res.render("products/detalleProducto", { vino: vino });
  },

  vinoteca: (req, res) => {
    res.render("products/vinoteca", {
      vinos: vinos,
      link: "/editarProductos/" + vinos.id,
    });
  },

  agregarProductos: (req, res) => {
    res.render("products/agregarProductos");
  },

  editarProductos: (req, res) => {
    const id = req.params.id;
    const vino = vinos.find((vino) => {
      return id == vino.id;
    });
    if (vino) {
      res.render("products/editarProductos", {
        vino: vino,
        pageTitle: vino.nombre,
      });
    } else {
      res.send("No seleccionaste ningun vino. Intenta /editarProductos/2");
    }
  },

  deleteProduct: (req, res) => {
    const id = req.params.id;
    const vino = vinos.find((vino) => {
      return id == vino.id;
    });
    res.redirect("products/vinoteca");
  },
};

module.exports = productsController;
