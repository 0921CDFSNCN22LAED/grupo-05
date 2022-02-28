const express = require("express");
const router = express.Router();
const uvasController = require("../../controllers/apiControllers/uvasController");

router.get("/", uvasController.listar);

module.exports = router;
