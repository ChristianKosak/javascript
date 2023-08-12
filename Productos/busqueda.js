// Datos de productos
const products = [
    { name: "Pantalón", price: 20000, category: "Pantalones", image: "ruta-de-la-imagen" },
    // Agrega los otros productos aquí...
  ];

  // Función para mostrar los productos en la página
  function displayProducts(productsArray) {
    const productRow = document.getElementById("productRow");
    productRow.innerHTML = "";

    productsArray.forEach(product => {
      const productCard = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">$${product.price}</p>
              <button class="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>`;
      productRow.innerHTML += productCard;
    });
  }

  // Mostrar todos los productos al cargar la página
  displayProducts(products);

  // Función para realizar la búsqueda
  function searchProducts(query) {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
  }

  // Agregar un evento de entrada para el campo de búsqueda
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function(event) {
    const searchTerm = event.target.value;
    searchProducts(searchTerm);
  });