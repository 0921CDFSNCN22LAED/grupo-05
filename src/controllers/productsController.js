const path = require("path");

const productsService = require("../services/productsServices");

const vinos = productsService.getAll();

const db = require("../database/models");

const productsController = {
    detalleProducto: (req, res) => {
        /*const id = req.params.id;
        const vino = productsService.findOne(id);
        res.render("products/detalleProducto", { vino: vino });*/ //viejo crud

        db.Vinos.findByPk(req.params.id).then((vino) => {
            res.render("products/detalleProducto", { vino: vino });
        });
    },

    vinoteca: (req, res) => {
        /*res.render("products/vinoteca", {
            vinos: vinos,
            link: "/editarProductos/" + vinos.id,
        });*/
        //viejo crud
        db.Vinos.findAll()
            .then((vinos) => {
                res.render("products/vinoteca", {
                    vinos: vinos,
                    link: "/editarProductos/" + vinos.id,
                });
            })
            .catch((error) => {
                console.log(error);
            });
        //probando con async await. agregar el async
        /*const vinos = await db.Vinos.findAll();
        res.render("products/vinoteca", {
            vinos: vinos,
            link: "/editarProductos/" + vinos.id,
        });*/
    },

    agregarProducto: (req, res) => {
        res.render("products/agregarProducto");
    },
    store: (req, res) => {
        const product = {
            id: Date.now(),
            ...req.body,
            imagen: req.file.path.split("public").pop(),
        };

        vinos.push(product);

        productsService.saveProducts();
        res.redirect("/products/vinoteca");
    },

    editarProducto: (req, res) => {
        /*const id = req.params.id;
        const vino = productsService.findOne(id);  Cambio de CRUD*/
        if (vino) {
            db.Vinos.findByPk(req.params.id).then((vino) => {
                res.render("products/editarProducto", {
                    vino: vino,
                    pageTitle: vino.nombre,
                });
            })

        } else {
            res.send(
                "No seleccionaste ningun vino. Intenta /editarProductos/2"
            );
        }
    },

    actualizarProducto: (req, res) => {
        const id = req.params.id;
        const index = vinos.findIndex((vino) => {
            return vino.id == id;
        });

        const updatedProduct = {
            id: vinos[index].id,
            ...req.body,
            imagen: req.file.path.split("public").pop(),
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
