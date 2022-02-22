window.addEventListener("load", function () {
    let register = document.querySelector("register-form-container");

    register.addEventListener("submit", function (e) {

        let errores = [];

        let nombreApellido = document.querySelector("#name");

        if (nombreApellido.value == "") {
            errores.push("El campo de Nombre y Apellido deberán estar completos.")
        }

        let email = document.querySelector("#email");

        if (email.value == "") {
            errores.push("El campo de Email deberá estar completo.")
        }

        let birthday = document.querySelector("#birthday");

        if (birthday.value == "") {
            errores.push("Debes completar con tu fecha de cumpleaños.")
        }

        let dni = document.querySelector("#dni");

        if (dni.value == "") {
            errores.push("Debes completar con tu DNI.")
        }

        let password = document.querySelector("#password");

        if (password.value == "") {
            errores.push("Debes completar tu contraseña.")
        } else if (password.value.length < 5) {
            errores.push("Tu contraseña debe tener al menos 5 caracteres.")
        }

        let confirmPassword = document.querySelector("#confirm-password");

        if (confirmPassword.value == password.value) {
            errores.push("Debes repetir la contraseña.")
        };

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul")

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML = "<li" + errores[i] + "</li>";

            }
        }
    });
})