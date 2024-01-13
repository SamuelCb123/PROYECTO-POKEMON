"use strict";

document.addEventListener('DOMContentLoaded', function() {
    
    let check = document.getElementById("check");
    let pass = document.getElementById("pass");
    let registroButton = document.getElementById('registro');
    let iniciarsesion = document.getElementById('iniciarsesion');
    let año = document.getElementById("año");

    if (check && pass) {
        check.onclick = togglePassword;
    }

    function togglePassword() {
        if (check.checked) {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    }

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

    let añoActual = new Date().getFullYear();

    if (año) {
        año.textContent = añoActual;
    } else {
        console.error('No hay elemento año.');
    }
});
