// Declaración de array para almacenar los productos
let productos = [];

// Función para agregar un producto al array
function agregarProducto(nombre, costo) {
  const producto = {
    nombre: nombre,
    costo: costo
  };
  productos.push(producto);
}

// Función para buscar un producto por nombre
function buscarProducto(nombre) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre === nombre) {
      return productos[i];
    }
  }
  return null; 
}

// Función para mostrar el resultado en el DOM
function mostrarResultado(resultado) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = resultado;
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
      agregarProducto(nombre, costo); 
    } else {
      alert("Costo inválido. Intente nuevamente.");
      continue;
    }

    let seguirComprando = prompt("¿Desea seguir agregando productos? (S/N)");

    if (seguirComprando.toUpperCase() === "N") {
      continuar = false;
    }
  }

  // Mostrar el costo total de los productos seleccionados
  let resultado = "El costo total de los productos seleccionados es: $" + costoTotal.toFixed(2);
  mostrarResultado(resultado);

  let buscarProductoNombre = prompt("Ingrese el nombre del producto a buscar:");
  let productoEncontrado = buscarProducto(buscarProductoNombre); 

  if (productoEncontrado) {
    resultado = "El producto \"" + productoEncontrado.nombre + "\" fue encontrado. Su costo es: $" + productoEncontrado.costo.toFixed(2);
  } else {
    resultado = "El producto \"" + buscarProductoNombre + "\" no fue encontrado.";
  }
  mostrarResultado(resultado);

  // Guardar productos en el localStorage usando JSON
  localStorage.setItem("productos", JSON.stringify(productos));
}

// Cargar productos almacenados en el localStorage al iniciar la página
document.addEventListener("DOMContentLoaded", function () {
  const storedProductos = localStorage.getItem("productos");
  if (storedProductos) {
    productos = JSON.parse(storedProductos);
  }
});


agregarProducto("Remera", 10000);
agregarProducto("Pantalón", 20000);
agregarProducto("Malla", 15000);
agregarProducto("Zapatilla", 35000);
agregarProducto("Medias", 5000);

simuladorCostos();