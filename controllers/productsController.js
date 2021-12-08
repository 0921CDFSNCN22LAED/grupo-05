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

  agregarProducto: (req, res) => {
    res.render("products/agregarProducto");
  },
  store: (req, res) => {
    productsService.createOne(req.body);
    res.redirect("/products/vinoteca");
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

  actualizarProducto: (req, res) => {
    const id = req.params.id;
    const index = vinos.findIndex((vino) => {
      return vino.id == id;
    });

    const updatedProduct = {
      id: vinos[index].id,
      imagen: "/images/img-products/" + req.file.filename,
      ...req.body,
    };

    vinos[index] = updatedProduct;

    productsService.saveProducts();

    res.redirect("/products/detalle/" + updatedProduct.id);
  },

  eliminarProducto: (req, res) => {
    const id = req.params.id;
    const vino = productsService.findOne(id);
    if (vino) {
      res.render("products/eliminarProducto", {
        vino: vino,
        pageTitle: vino.nombre,
      });
    }
  },

  borrarProducto: (req, res) => {
    const id = req.params.id;
    productsService.deleteOne(id);

    res.redirect("/products/vinoteca");
  },
};

module.exports = productsController;
