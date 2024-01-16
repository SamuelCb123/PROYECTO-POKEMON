"use strict";

let registroButton = document.getElementById('registro');
let iniciarsesion = document.getElementById('iniciarsesion');


const nombre = document.getElementById("name");
let apellido = document.getElementById("subname");
let correo = document.getElementById("email");
let contraseña = document.getElementById("pass");
let parrafo = document.getElementById("warnings");
let form = document.querySelector('form'); 

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let caracteres = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if (nombre.value.length < 3) {
        warnings += `El nombre es demasiado corto <br>`;
    }

    if (!caracteres.test(correo.value)) {
        warnings += `El correo no es válido <br>`;
    }

    if (contraseña.value.length < 3) {
        warnings += `La contraseña es demasiado corta<br>`;
    }

    if (warnings === "") {
  
        window.location.href = 'iniciarsesion.html';
    } else {
     
        parrafo.innerHTML = warnings;
    }
});

