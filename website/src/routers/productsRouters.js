const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController.js");
const ifAdmin = require("../Middlewares/ifadmin.js");
const validateAddVino = require("../Middlewares/validaciones/backend/validateAddVino.js");
const uploadFile = require("../Middlewares/multerMiddleware");

router.get("/detalle/:id/", productsController.detalleProducto);

router.get("/vinoteca", ifAdmin, productsController.vinoteca);

router.get("/agregar", productsController.agregarProducto);
router.post(
    "/agregar",
    uploadFile.single("imagen"),
    validateAddVino,
    productsController.store
);

router.get("/editar/:id", productsController.editarProducto);
router.put(
    "/editar/:id",
    uploadFile.single("imagen"),
    productsController.actualizarProducto
);

router.get("/eliminar/:id", productsController.eliminarProducto);
router.delete("/eliminar/:id", productsController.borrarProducto);

router.get("/buscar", productsController.buscarProducto);

module.exports = router;
