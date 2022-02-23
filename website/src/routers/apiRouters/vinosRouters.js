const express = require("express");
const router = express.Router();
const vinosController = require("../../controllers/apiControllers/vinosController");

router.get("/", vinosController.listar);
router.get("/:id", vinosController.detail);

module.exports = router;
