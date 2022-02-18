const express = require("express");
const router = express.Router();
const vinosController = require("../../controllers/apiControllers/vinosController");

router.get("/", vinosController.listar);

module.exports = router;
