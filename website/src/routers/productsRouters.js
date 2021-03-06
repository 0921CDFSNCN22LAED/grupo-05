const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController.js");
const ifAdmin = require("../Middlewares/ifadmin.js");
const onlyAdmin = require("../Middlewares/onlyAdmin.js");
const validateAddVino = require("../Middlewares/validaciones/backend/validateAddVino.js");
const uploadFile = require("../Middlewares/multerMiddleware");
const ifNotLogged = require("../Middlewares/ifNotLogged.js");
const validateEditProduct = require("../Middlewares/validaciones/backend/validateEditProduct.js");
const validateAddBodega = require("../Middlewares/validaciones/backend/validateAddBodega.js");
const validateAddUva = require("../Middlewares/validaciones/backend/validateAddUva.js");
const validateAddCategoria = require("../Middlewares/validaciones/backend/validateAddCategoria.js");

router.get("/detalle/:id/", productsController.detalleProducto);

router.get("/vinoteca", ifAdmin, productsController.vinoteca);
router.get("/buscar", productsController.buscarProducto);

router.get("/agregar", onlyAdmin, productsController.agregarProducto);
router.post(
    "/agregar",
    uploadFile.single("imagen"),
    validateAddVino,
    productsController.store
);

router.get("/editar/:id", onlyAdmin, productsController.editarProducto);
router.put(
    "/editar/:id",
    uploadFile.single("imagen"),
    validateEditProduct,
    productsController.actualizarProducto
);

router.get("/eliminar/:id", onlyAdmin, productsController.eliminarProducto);
router.delete("/eliminar/:id", productsController.borrarProducto);

router.post("/detalle/cava/:id", ifNotLogged, productsController.agregarCava);

router.post(
    "/detalle/favorito/:id",
    ifNotLogged,
    productsController.agregarFavorito
);

router.get("/plus", productsController.agregarBUC);
router.post(
    "/plusBodegas",
    validateAddBodega,
    productsController.ProcessAgregarBodegas
);
router.post("/plusUvas", validateAddUva, productsController.ProcessAgregarUvas);
router.post(
    "/plusCategorias",
    validateAddCategoria,
    productsController.ProcessAgregarCategorias
);

module.exports = router;
