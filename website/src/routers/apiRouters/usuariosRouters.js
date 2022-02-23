const express = require("express");
const router = express.Router();
const usuariosController = require("../../controllers/apiControllers/usuariosController");

router.get("/", usuariosController.listar);
router.get("/:id", usuariosController.detail);

module.exports = router;
