const path = require("path");
const { body } = require("express-validator");

const validateAddVino = [
    body("nombre")
        .notEmpty()
        .withMessage("Tienes que escribir un nombre.")
        .isLength({ min: 5 })
        .withMessage("El nombre debe tener al menos 5 caracteres."),
    body("precio")
        .notEmpty()
        .withMessage("Tienes que indicar el precio.")
        .isInt()
        .withMessage("Este campo solo admite números enteros."),
    body("anio")
        .notEmpty()
        .withMessage("Tienes que indicar el año.")
        .isInt()
        .withMessage("Este campo solo admite números enteros."),
    body("stock")
        .notEmpty()
        .withMessage("Tienes que indicar el stock.")
        .isInt()
        .withMessage("Este campo solo admite números enteros."),
    body("descripcion")
        .notEmpty()
        .withMessage("Tienes que escribir una descripción.")
        .isLength({ min: 20 })
        .withMessage("La descripción debe tener al menos 20 caracteres."),
    body("imagen").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ",gif"];

        if (!file) {
            throw new Error("Tienes que subir una imagen.");
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

module.exports = validateAddVino;
