const express = require("express");
const router = express.Router();
const usuariosController = require("../../controllers/apiControllers/usuariosController");

router.get("/", usuariosController.listar);

module.exports = router;
