// Algoritmo principal
function simuladorCostos() {
    let costoTotal = 0;
    let continuar = true;

    while (continuar) {
        let producto = prompt("Ingrese el nombre del producto:");
        let costo = parseFloat(prompt("Ingrese el costo del producto:"));

        if (!isNaN(costo)) {
            costoTotal += costo;
        } else {
            alert("Costo inválido. Intente nuevamente.");
            continue;
        }

        let seguirComprando = prompt("¿Desea seguir agregando productos? (S/N)");

        if (seguirComprando.toUpperCase() === "N") {
            continuar = false;
        }
    }

    alert("El costo total de los productos seleccionados es: " + costoTotal.toFixed(2));
}


simuladorCostos();