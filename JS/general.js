"use strict";
function eliminarFila(button) {
    let confirmacion = confirm("¿Estás seguro de que quieres eliminar esta fila?");
    if (confirmacion) {
       let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}