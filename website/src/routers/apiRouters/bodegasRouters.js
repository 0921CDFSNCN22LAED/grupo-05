const express = require("express");
const router = express.Router();
const bodegasController = require("../../controllers/apiControllers/bodegasController");

router.get("/", bodegasController.listar);

module.exports = router;
