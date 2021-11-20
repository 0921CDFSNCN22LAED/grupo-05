const express = require("express");
const router = express.Router();
const path = require("path");
const mainController = require("../controllers/mainController.js");


router.get("/", mainController.index);

router.get("/cava", mainController.cava);

router.get("/detalleProducto", mainController.detalleProducto);

router.get("/registro", mainController.registro);

router.get("/login", mainController.login);

router.get("/vinoteca", mainController.vinoteca);

router.get("/agregarProductos", mainController.agregarProductos);

router.get("/editarProductos", mainController.editarProductos);

module.exports = router;
