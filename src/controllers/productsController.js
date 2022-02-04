const path = require("path");

const productsService = require("../services/productsServices");

const vinos = productsService.getAll();

const db = require("../database/models");

const {validationResult} = require('express-validator');
const req = require("express/lib/request");
const res = require("express/lib/response");

const productsController = {
    detalleProducto: (req, res) => {
        /*const id = req.params.id;
        const vino = productsService.findOne(id);
        res.render("products/detalleProducto", { vino: vino });*/ //viejo crud

        db.Vinos.findByPk(req.params.id).then((vino) => {
            res.render("products/detalleProducto", { vino: vino });
        });
    },

    vinoteca: async (req, res) => {
        try {
            const vinos = await db.Vinos.findAll();
            res.render("products/vinoteca", {
                vinos: vinos,
                link: "/editarProductos/" + vinos.id,
            });
        } catch (error) {
            console.error(error);
        }

        /*res.render("products/vinoteca", {
            vinos: vinos,
            link: "/editarProductos/" + vinos.id,
        });
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
            });*/
        //probando con async await. agregar el async
    },

    agregarProducto: (req, res) => {
        res.render("products/agregarProducto");
    },
/*     store: (req, res) => {
        const product = {
            id: Date.now(),
            ...req.body,
            imagen: req.file.path.split("public").pop(),
        };

        vinos.push(product);

        productsService.saveProducts();
        res.redirect("/products/vinoteca");
    }, */
    store: (req, res) => {
        let errors = validationResult (req);
    
    if (errors.isEmpty()){
        db.Vinos.store({
            nombre: req.body.nombre,
            imagen: (req.file.path).split('imagen').pop(),
            bodega: req.body.bodega,
            descripcion: req.body.descripcion,
            precio: req.body.precio
        }).then(() => {
            res.redirect("/products/vinoteca")
        }).catch((err) => {
            console.log(err);
        });
    }else{
        res.render('agregarProducto', {errors: errors.errors, old: req.body})
    }
    },

    editarProducto: async (req, res) => {
        /*const id = req.params.id;
        const vino = productsService.findOne(id);  Cambio de CRUD*/

        try {
            let vino = await db.Vinos.findByPk(req.params.id);
            if (vino) {
                res.render("products/editarProducto", { vino: vino, pageTitle: vino.nombre });
            } else {
                res.send("No seleccionaste ningún vino")
            };
        } catch (error) {
            console.error(error);
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
