"use strict";
function eliminarFila(btn) {
    let fila = btn.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}
