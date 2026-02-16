/*
Dificultad:  🟢🟡
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */

const numero = parseInt(prompt(`Ingresa un número que quieras multiplicar`));

function tablaMultiplicar(num) {
  if (isNaN(num)) {
    alert(`Ingresaste un valor erroneo`);
    return;
  }
  for (let i = 1; i <= 10; i++) {
    let multiplicacion = num * i;
    document.writeln(`${num} x ${i} = ${multiplicacion} </br>`);
  }
}

tablaMultiplicar(numero);
