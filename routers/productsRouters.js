const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController.js");


router.get("/cava", productsController.cava);

router.get("/detalleProducto", productsController.detalleProducto);

router.get("/vinoteca", productsController.vinoteca);

router.get("/agregarProductos", productsController.agregarProductos);

router.get("/editarProductos", productsController.editarProductos);

router.get("/editarProductos/:id", productsController.editarProductos);

module.exports = router;