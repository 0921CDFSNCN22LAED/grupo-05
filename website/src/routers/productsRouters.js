const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController.js");
const multer = require("multer");
const ifAdmin = require("../Middlewares/ifadmin.js");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/images/img-products"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_img_" + path.extname(file.originalname));
    },
});

const uploadFile = multer({ storage });

router.get("/detalle/:id/", productsController.detalleProducto);

router.get("/vinoteca", ifAdmin ,productsController.vinoteca);

router.get("/agregar", productsController.agregarProducto);
router.post("/agregar", uploadFile.single("imagen"), productsController.store);

router.get("/editar/:id", productsController.editarProducto);
router.put(
    "/editar/:id",
    uploadFile.single("imagen"),
    productsController.actualizarProducto
);

router.get("/eliminar/:id", productsController.eliminarProducto);
router.delete("/eliminar/:id", productsController.borrarProducto);

router.get('/buscar', productsController.buscarProducto);

module.exports = router;
