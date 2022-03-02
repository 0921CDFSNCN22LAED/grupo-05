const { check } = require("express-validator");
const { body } = require("express-validator");
const path = require('path')


let validateEditProduct = [
    check("nombre")
        .notEmpty().withMessage("Debes completar el campo de Nombre").bail()
        .isLength({ min: 5 }).withMessage("El campo debe tener mas de 5 caracteres"),
    check("precio").notEmpty().withMessage("Debes completar el campo de precio"),
    check("anio").notEmpty().withMessage("Debes completar el año del producto"),
    check("stock").notEmpty().withMessage("Debes completar el campo del stock del producto"),
    check("descripcion").notEmpty().isLength({ min: 20 }).withMessage("Debes completar el campo de la descripción"),
    body("imagen").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg"];

        if (!file) {
            throw new Error("Tienes que subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(
                    `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
                        ", "
                    )}`
                );
            }
        }
        return true;
    }),
];

module.exports = validateEditProduct;
