// Declaración de array para almacenar los productos
let productos = [];

// Declaración de función para agregar un producto al array
function agregarProducto(nombre, costo) {
  const producto = {
    nombre: nombre,
    costo: costo
  };
  productos.push(producto);
}

// Declaración de función para buscar un producto por nombre
function buscarProducto(nombre) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre === nombre) {
      return productos[i];
    }
  }
  return null; // Retorna null si el producto no se encuentra
}

// Algoritmo principal
function simuladorCostos() {
  let costoTotal = 0;
  let continuar = true;

  while (continuar) {
    let nombre = prompt("Ingrese el nombre del producto:");
    let costo = parseFloat(prompt("Ingrese el costo del producto:"));

    if (!isNaN(costo)) {
      costoTotal += costo;
      agregarProducto(nombre, costo); // Agrega el producto al array
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

  let buscarProductoNombre = prompt("Ingrese el nombre del producto a buscar:");
  let productoEncontrado = buscarProducto(buscarProductoNombre); // Busca el producto en el array

  if (productoEncontrado) {
    alert("El producto \"" + productoEncontrado.nombre + "\" fue encontrado. Su costo es: " + productoEncontrado.costo.toFixed(2));
  } else {
    alert("El producto \"" + buscarProductoNombre + "\" no fue encontrado.");
  }
}

// Agregar los productos
agregarProducto("Remera", 10000);
agregarProducto("Pantalón", 20000);
agregarProducto("Malla", 15000);
agregarProducto("Zapatilla", 35000);
agregarProducto("Medias", 5000);

simuladorCostos();