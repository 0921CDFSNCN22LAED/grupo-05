const express = require("express");
const router = express.Router();
const categoriasController = require("../../controllers/apiControllers/categoriasController");

router.get("/", categoriasController.listar);

module.exports = router;
