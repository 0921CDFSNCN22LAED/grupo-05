const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController.js");

router.get("/cava", productsController.cava);

router.get("/detalle/:id/", productsController.detalleProducto);

router.get("/vinoteca", productsController.vinoteca);

router.get("/agregar", productsController.agregarProducto);

router.get("/editar/:id", productsController.editarProducto);
router.put("/editar/:id", productsController.actualizarProducto);

router.delete("/vinoteca", productsController.eliminarProducto);

module.exports = router;
