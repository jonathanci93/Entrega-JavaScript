let seguirComprando = false;
let precioTotal = 0;

// Función para calcular el precio
function calcularPrecio(precioUnitario, cantidad) {
  return precioUnitario * cantidad;
}

do {
  let productoElegido = parseInt(prompt("Bienvenido, ¿cuál es el producto que deseas comprar? \n 1. Proteinas \n 2. Creatinas"));

  // Ciclo compra proteinas
  if (productoElegido === 1) {
    let proteinaElegida = parseInt(prompt("¿Qué proteina deseas comprar?: \n 1. Star nutrition $30.000\n 2. One fit $20.000"));
    let cantidadElegida = parseInt(prompt("¿Cuántas proteinas deseas comprar?"));
    if (proteinaElegida === 1) {
      precioTotal += calcularPrecio(30000, cantidadElegida);
    } else if (proteinaElegida === 2) {
      precioTotal += calcularPrecio(20000, cantidadElegida);
    } else {
      alert("Seleccione una opción válida");
    }

  // Ciclo compra creatinas
  } else if (productoElegido === 2) {
    let creatinaElegida = parseInt(prompt("¿Qué creatina deseas comprar?: \n 1. Star nutrition $20.000 \n 2. One fit $15.000"));
    let cantidadElegida = parseInt(prompt("¿Cuántas creatinas deseas comprar?"));
    if (creatinaElegida === 1) {
      precioTotal += calcularPrecio(20000, cantidadElegida);
    } else if (creatinaElegida === 2) {
      precioTotal += calcularPrecio(15000, cantidadElegida);
    } else {
      alert("Seleccione una opción válida");
    }
  } else {
    alert("Por favor, elija un producto válido");
  }

  seguirComprando = confirm("¿Desea seguir comprando?");
} while (seguirComprando);

alert("El precio total es de: " + precioTotal);
