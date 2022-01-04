const express = require("express");
const router = express.Router();
const path = require("path");
const usersController = require("../controllers/usersControllers");


/* EXPRESS VALIDATOR PARA ACCOUNT*/

const {check} = require('express-validator');

let validateAccountLogin = [
    check('email').notEmpty().withMessage('Debes completar el mail'),
    check('password').notEmpty().withMessage('Debes completar la contrasena')
]

router.get("/registro", usersController.registro);

router.get("/login", usersController.login);
router.post("/login", usersController.loginProcess);

router.get("/cuenta", usersController.cuenta);

router.post("/login", validateAccountLogin ,usersController.loginProcess)


module.exports = router;
