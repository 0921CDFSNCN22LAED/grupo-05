productsService = require("../services/productsServices");

const productsController = {
  cava: (req, res) => {
    res.render("users/cava");
  },
  detalleProducto: (req, res) => {
    const id = req.params.id;
    const vino = productsService.findOne(id);
    res.render("products/detalleProducto", { vino: vino });
  },

  vinoteca: (req, res) => {
    vinos = productsService.getAll();
    res.render("products/vinoteca", {
      vinos: vinos,
      link: "/editarProductos/" + vinos.id,
    });
  },

  agregarProducto: (req, res) => {
    res.render("products/agregarProducto");
  },

  editarProducto: (req, res) => {
    const id = req.params.id;
    const vino = productsService.findOne(id);
    if (vino) {
      res.render("products/editarProducto", {
        vino: vino,
        pageTitle: vino.nombre,
      });
    } else {
      res.send("No seleccionaste ningun vino. Intenta /editarProductos/2");
    }
  },

  eliminarProducto: (req, res) => {
    const id = req.params.id;
    const vino = productsService.findOne(id);
    res.redirect("products/vinoteca");
  },
};

module.exports = productsController;
