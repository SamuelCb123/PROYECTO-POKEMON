" use strict";
//formulario validacion iniciarsesion
let nombre = document.getElementById("name");


let contraseña = document.getElementById("pass");//aacede a los elemetos con id pass,warning,form y name
let parrafo = document.getElementById("warnings");
let form = document.querySelector('form'); 

form.addEventListener("submit", e => {//inicializa el evento cuando se pulsa el boton
    e.preventDefault();
    let warnings = "";

    
    if (nombre.value.length < 3) {
        warnings += `El nombre es demasiado corto <br>`;//si el nombre introducido es menor a 3 caracteres devovlera 
    }

    if (!/^[a-zA-Z]+$/.test(nombre.value)) {
        warnings += `El nombre solo debe contener letras <br>`;
    }

    if (contraseña.value.length < 3) {   
        warnings += `La contraseña es demasiado corta<br>`;
    }

    if (warnings === "") {

        window.location.href = 'perfil.html';
    } else {
   
        parrafo.innerHTML = warnings;
    }
});

