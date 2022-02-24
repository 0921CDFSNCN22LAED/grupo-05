window.addEventListener('load', function(){
    let formulario = querySelector('login-form-container')
    formulario.addEventListener('submit', function(e){
        let error = [];

        let usuarioEmail = document.querySelector("#email");
        if(!usuarioEmail.value || usuarioEmail.value == ""){
            error.push("Por favor, ingresa un usuario valido");
        }
        let usuarioPassword = document.querySelector("#password");
        if(!usuarioPassword.value || usuarioPassword.value === ""){
            error.push("Por favor, ingresa una contraseña valida");
        }
        if(error.length > 0){
            e.preventDefault();
        }
        mensajeError.innerHTML = error.join(".")
    })
    error.style.color = "red";
});