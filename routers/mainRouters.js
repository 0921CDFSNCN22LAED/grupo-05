const express = require("express");
const router = express.Router();
const path = require("path");
const mainController = require("../controllers/mainController.js");


router.get("/", mainController.index);

router.get("/registro", mainController.registro);

router.get("/login", mainController.login);

router.get("/cuenta", mainController.cuenta);


module.exports = router;
