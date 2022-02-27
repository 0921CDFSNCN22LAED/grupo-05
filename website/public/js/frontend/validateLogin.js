window.addEventListener("load", function () {
    let formulario = document.querySelector(".login-form-container");
    formulario.addEventListener("submit", function (e) {
        let errores = [];

        let usuarioEmail = document.getElementById("email");
        if (usuarioEmail.value.length == 0) {
            errores.push("Por favor, ingresa un usuario valido");
        }
        let usuarioPassword = document.getElementById("password");
        if (usuarioPassword.value.length == 0) {
            errores.push("Por favor, ingresa una contraseña valida");
        }
        console.log(errores);
        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector(".errores-front");

            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
            }
        }
    });
});
