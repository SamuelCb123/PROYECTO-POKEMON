"use strict";
check.onclick = togglePassword;

function togglePassword() {
    if (check.checked) {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}
let registroButton = document.getElementById('registro');
let iniciarsesion = document.getElementById('iniciarsesion');

if (registroButton) {
    registroButton.addEventListener('click', function() {
        window.location.href = 'iniciarsesion.html';
    });
} else {
    console.error('No hay elemento registro.');
}

if (iniciarsesion) {
    iniciarsesion.addEventListener('click', function() {
        window.location.href = 'perfil.html';
    });
} else {
    console.error('No hay elemento iniciarsesion.');
}
