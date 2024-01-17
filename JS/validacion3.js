"use strict";

const form = document.getElementById('pokemon'); 
form.addEventListener("submit", e => {
    e.preventDefault();

    let name = document.getElementById('name');
    let type = document.getElementById('type');
    let type2 = document.getElementById('type2');
    let region = document.getElementById('region');
    let warnings = document.getElementById('warnings');
    let warningsText = "";

    if (name.value.trim() === "") {
        warningsText += `El campo "Nombre" no puede estar vacío <br>`;
    } else if (name.value.length < 3) {
        warningsText += `El nombre es demasiado corto <br>`;
    }

    if (type.value.trim() === "") {
        warningsText += `El campo "Tipo" no puede estar vacío <br>`;
    } else if (type.value.length < 3) {
        warningsText += `El tipo es demasiado corto <br>`;
    }

    if (type2.value.trim() === "") {
        warningsText += `El campo "Tipo 2" no puede estar vacío <br>`;
    } else if (type2.value.length < 3) {
        warningsText += `El tipo 2 es demasiado corto <br>`;
    }

    if (region.value.trim() === "") {
        warningsText += `El campo "Región" no puede estar vacío <br>`;
    } else if (region.value.length < 3) {
        warningsText += `La región es demasiado corta <br>`;
    }

    if (type.value === type2.value) {
        warningsText += `Los tipos seleccionados en "Tipo" y "Tipo 2" no pueden ser iguales <br>`;
    }

    if (warningsText === "") {
        // All validation passed, show alert
        alert("Pokemon creado");
    } else {
        // Display validation warnings
        warnings.innerHTML = warningsText;
    }
});
