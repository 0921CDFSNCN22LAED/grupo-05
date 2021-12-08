const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController.js");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/img-products"));
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

const uploadFile = multer({ storage });

router.get("/cava", productsController.cava);

router.get("/detalle/:id/", productsController.detalleProducto);

router.get("/vinoteca", productsController.vinoteca);

router.get("/agregar", productsController.agregarProducto);

router.post("/agregar", productsController.store);

router.get("/editar/:id", productsController.editarProducto);
router.put(
  "/editar/:id",
  uploadFile.single("imagen"),
  productsController.actualizarProducto
);

router.get("/eliminar/:id", productsController.eliminarProducto);
router.delete("/eliminar/:id", productsController.borrarProducto);

module.exports = router;
