/* EXPRESS VALIDATOR PARA ACCOUNT*/

const { check } = require("express-validator");
const { body } = require("express-validator");

let validateAccountLogin = [
    check("email").notEmpty().withMessage("Debes completar el mail"),
    check("password").notEmpty().withMessage("Debes completar la contrasena"),
];

module.exports = validateAccountLogin;
