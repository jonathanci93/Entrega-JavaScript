

//Array de proteinas
const proteinas = [
  {nombre: "Star Nutrition", precio: 30000},
  {nombre: "One Fit", precio: 20000},
  {nombre: "Optimum Nutrition", precio: 25000},
];
//Array de creatinas
const creatinas =[
  {nombre: "Star Nutrition", precio: 20000},
  {nombre: "One Fit", precio: 15000},
  {nombre: "Gold", precio: 18000},
];

let productoElegido = Number(prompt("Bienvenido , ¿cuál es el producto que deseas comprar? \n 1. Proteinas \n 2. Creatinas", "Ejemplo: 1"));
let ordenarProductos = Number(prompt("¿Desea ordenar los productos de mayor a menor? \n 1. Si \n 2. No", "Ejemplo 1"));


let productosElegidos = [];


if (productoElegido === 1) {
  productosElegidos = proteinas;
} else if (productoElegido === 2) {
  productosElegidos = creatinas;
} else {
  alert("Por favor, elija un producto válido");
}
//Ordenar productos 
if (ordenarProductos === 1) {
  productosElegidos.sort((a, b) => b.precio - a.precio);
}


//Mostrar productos
if (productosElegidos) {
  let comprarProducto = "¿Que producto desea comprar? \n";
    productosElegidos.forEach((producto, index) => {
      comprarProducto += `${index + 1} ${producto.nombre} - Precio: $${producto.precio} \n`;
    });


let productoSeleccionado = Number(prompt(comprarProducto));
  // Validar selección
  if (productoSeleccionado > 0 && productoSeleccionado <= productosElegidos.length) {
    let productoFinal = productosElegidos[productoSeleccionado - 1];
    alert(`Has comprado: ${productoFinal.nombre} por $${productoFinal.precio}`);
  } else {
    alert("Opción no válida. Por favor elige un número de producto válido.");
  }
}