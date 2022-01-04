const express = require("express");
const router = express.Router();
const path = require("path");
const mainController = require("../controllers/mainController.js");


router.get("/", mainController.index);



/* RUTAS DE ACCOUNT */


/* EXPRESS VALIDATOR PARA ACCOUNT*/

const {check} = require('express-validator');
const {body} = require('express-validator');

let validateAccountLogin = [
    check('email').notEmpty().withMessage('Debes completar el mail'),
    check('password').notEmpty().withMessage('Debes completar la contrasena')
]

let validateAccountRegister = [
    check('name').notEmpty().withMessage('Debes completar este campo1'),
    check('email').notEmpty().withMessage('Debes completar este campo2'),
    check('birthday').notEmpty().withMessage('Debes completar este campo3'),
    check('dni').notEmpty().withMessage('Debes completar este campo4'),
    check('password').notEmpty().withMessage('Debes completar este campo5'),
    body('confirm-password').custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error('Las contraseñas no son iguales')
        }
        return true
    })
]


router.get("/registro", mainController.registro);
router.post("/registro", validateAccountRegister ,mainController.accountStore)

router.get("/login", mainController.login);

router.get("/cuenta", mainController.cuenta);

router.post("/login", validateAccountLogin ,mainController.loginProcess)


module.exports = router;
