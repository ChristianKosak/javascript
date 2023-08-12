// Declaración de array para almacenar los productos
let productos = [];

// Declaración de función para agregar un producto al array
/*function agregarProducto(nombre, costo) {
  const producto = {
    nombre: nombre,
    costo: costo
  };
  productos.push(producto);
}*/

// Declaración de función para buscar un producto por nombre
/*function buscarProducto(nombre) {
  return productos.find(producto => producto.nombre === nombre);
}*/

// Función para mostrar el resultado utilizando SweetAlert
function mostrarResultado(costoTotal, productoEncontrado) {
  const mensaje = "El costo total de los productos seleccionados es: " + costoTotal.toFixed(2);
  
  // Mostrar el producto encontrado (si existe)
  if (productoEncontrado) {
    Swal.fire({
      icon: 'success',
      title: 'Resultado',
      html: mensaje + "<br>El producto \"" + productoEncontrado.nombre + "\" fue encontrado. Su costo es: " + productoEncontrado.costo.toFixed(2)
    });
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Resultado',
      html: mensaje + "<br>El producto no fue encontrado."
    });
  }
}

// Función para manejar el flujo de interacción con el usuario
// async function simuladorCostos() {
//   let costoTotal = 0;
//   let continuar = true;

//   while (continuar) {
//     let nombre = prompt("Ingrese el nombre del producto:");
//     let costo = parseFloat(prompt("Ingrese el costo del producto:"));

    // if (!isNaN(costo)) {
    //   costoTotal += costo;
    //   /*agregarProducto(nombre, costo);*/
    // } else {
    //   await Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'Costo inválido. Intente nuevamente.'
    //   });
    //   continue;
    // }

  //   let seguirComprando = await Swal.fire({
  //     icon: 'question',
  //     title: '¿Seguir agregando productos?',
  //     showCancelButton: true,
  //     confirmButtonText: 'Sí',
  //     cancelButtonText: 'No'
  //   });

  //   if (!seguirComprando.isConfirmed) {
  //     continuar = false;
  //   }
  // }

  const buscarProductoNombre = prompt("Ingrese el nombre del producto a buscar:");

  try {
    const response = await fetch('ruta-a-tu-archivo.json'); // Cambia 'ruta-a-tu-archivo.json' por la ubicación de tu archivo JSON
    const data = await response.json();
    
    // Carga los datos desde el JSON en el array 'productos'
    productos = data.productos;

    /*const productoEncontrado = buscarProducto(buscarProductoNombre); // Busca el producto en el array
    mostrarResultado(costoTotal, productoEncontrado);*/ // Mostrar el resultado con el producto encontrado (si existe)
  } catch (error) {
    console.error("Error al cargar los datos:", error);
    /*mostrarResultado(costoTotal, null);*/ // Mostrar el resultado sin el producto encontrado
  }

// Agregar los productos iniciales (puedes cargarlos desde el JSON también)
/*agregarProducto("Remera", 10000);
agregarProducto("Pantalón", 20000);
agregarProducto("Malla", 15000);
agregarProducto("Zapatilla", 35000);
agregarProducto("Medias", 5000);*/

// Llama a la función de simulación cuando la página esté cargada
document.addEventListener("DOMContentLoaded", simuladorCostos);






document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Verificar credenciales (ejemplo: usuarios predeterminados)
    if (username === "usuario1" && password === "contrasena1") {
      Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesión Exitoso',
        text: '¡Bienvenido, ' + username + '!',
        timer: 2000, // Cierra automáticamente después de 2 segundos
        showConfirmButton: false
      }).then(() => {
        window.location.href = "index.html"; // Redirigir a la página principal
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales Incorrectas',
        text: 'Usuario o contraseña incorrectos. Intente nuevamente.',
      });
    }
  });
});



  const products = [
    { name:"Remeras" },
    { name:"Zapatillas" },
    { name:"Pantalones" },
    { name:"Medias" },
    { name:"Malla" },
    
    
  ];

  const searchInput = document.getElementById("searchInput");
  const resulList= document.getElementById("resultsList");

  const handleSearch = () => {
const searchIterm = searchInput.value.toLowerCase();
const filteredProductos = productos.filter((producto) =>  productos.name.toLowerCase().startswith(searchIterm));

resulList.innerHTML = "";

filteredProductos.forEach((producto) => {
  const li = document.createElement("li");
  li.textContent = producto.name;
  resulListList.appendChild(li);

})
};

searchInput.addEventListener("input" , handleSearch);