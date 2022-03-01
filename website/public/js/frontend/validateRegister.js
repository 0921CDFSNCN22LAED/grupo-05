window.addEventListener("load", function () {
    console.log("hola");
    let register = document.querySelector(".register-form-container");

    register.addEventListener("submit", function (e) {
        let errores = [];
        let ulErrores = document.querySelector(".errores-front")
        let misErrores = document.querySelectorAll(".errores-front li")

        if (misErrores.length > 0) {
            ulErrores.innerHTML = ""
        }

        let nombreApellido = document.querySelector("#name");

        if (nombreApellido.value.length == 0) {
            errores.push("El campo de Nombre y Apellido deberá estar completo.")
        }

        let email = document.querySelector("#email");

        if (email.value.length == 0) {
            errores.push("El campo de Email deberá estar completo.")
        }

        let password = document.querySelector("#password");

        if (password.value.length == 0) {
            errores.push("Debes completar tu contraseña.")
        } else if (password.value.length < 5) {
            errores.push("Tu contraseña debe tener al menos 5 caracteres.")
        }

        let confirmPassword = document.querySelector("#confirm-password");

        if (confirmPassword.value !== password.value) {
            errores.push("Debes repetir la contraseña.")
        };
        console.log(errores)
        if (errores.length > 0) {
            e.preventDefault();

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>";

            }
        }
    });
})