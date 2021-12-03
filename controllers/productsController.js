productsService = require("../services/productsServices");

vinos = productsService.getAll();

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
    res.render("products/vinoteca", {
      vinos: vinos,
      link: "/editarProductos/" + vinos.id,
    });
  },

  agregarProductos: (req, res) => {
    res.render("products/agregarProductos");
  },
  store: (req, res) => {
    productsService.createOne (req.body);
    res.redirect("/products");
  },

  editarProductos: (req, res) => {
    const id = req.params.id;
    const vino = productsService.findOne(id);
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
    const vino = productsService.findOne(id);
    res.redirect("products/vinoteca");
  },
};

module.exports = productsController;
