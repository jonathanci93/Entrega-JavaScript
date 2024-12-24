// Array de proteínas
const proteinas = [
  { nombre: "Star Nutrition", precio: 30000 },
  { nombre: "One Fit", precio: 20000 },
  { nombre: "Optimum Nutrition", precio: 25000 },
];

// Array de creatinas
const creatinas = [
  { nombre: "Star Nutrition", precio: 20000 },
  { nombre: "One Fit", precio: 15000 },
  { nombre: "Gold", precio: 18000 },
];

// Función para elegir productos
function elegirProducto() {
  let productoElegido = Number(prompt("Bienvenido, ¿cuál es el producto que deseas comprar? \n 1. Proteínas \n 2. Creatinas", "Ejemplo: 1"));
  let productosElegidos = [];

  if (productoElegido === 1) {
      productosElegidos = proteinas;
  } else if (productoElegido === 2) {
      productosElegidos = creatinas;
  } else {
      alert("Por favor, elija un producto válido");
      return null; // Salir si no es válido
  }

  return productosElegidos;
}

// Función para filtrar productos por precio
const filtrarPorPrecio = (productos) => {
  let precioMaximo = Number(prompt("Ingrese el precio máximo para filtrar productos:"));
  return productos.filter(producto => producto.precio <= precioMaximo);
};

// Función para buscar un producto por nombre
const buscarProductoPorNombre = (productos) => {
  let nombreBuscado = prompt("Ingrese el nombre del producto que desea buscar:");
  return productos.find(producto => producto.nombre.toLowerCase() === nombreBuscado.toLowerCase());
};

// Función para mostrar productos
function mostrarProductos(productos) {
  let comprarProducto = "Productos disponibles:\n";
  productos.forEach((producto, index) => {
      comprarProducto += `${index + 1} ${producto.nombre} - Precio: $${producto.precio} \n`;
  });

  alert(comprarProducto);
}


let productosElegidos = elegirProducto();
if (productosElegidos) {

  let productosFiltrados = filtrarPorPrecio(productosElegidos);
  if (productosFiltrados.length > 0) {
      mostrarProductos(productosFiltrados);

      // Buscar producto
      let productoEncontrado = buscarProductoPorNombre(productosFiltrados);
      if (productoEncontrado) {
          alert(`Producto encontrado: ${productoEncontrado.nombre} - Precio: $${productoEncontrado.precio}`);
      } else {
          alert("Producto no encontrado.");
      }
  } else {
      alert("No hay productos que cumplan con el criterio de precio.");
  }
}