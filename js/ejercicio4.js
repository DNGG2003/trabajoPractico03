/*Dificultad:  🟢
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

 */

const nombre = prompt(`Ingresa tu nombre`);
function numeroEntero(nombre) {
  do {
    const numeroEntero = parseInt(prompt(`Ingresa un número entero`));
    if (isNaN(numeroEntero) || numeroEntero < 0) {
      alert(`Ingresaste un valor erroneo, intentalo nuevamente`);
    } else if (numeroEntero % 2 === 0) {
      alert(`El número ${numeroEntero} es par`);
    } else {
      alert(`El número ${numeroEntero} es impar`);
    }
  } while (window.confirm(`¿Queres ingresar otro número`));
  {
    alert(`Muchas gracias ${nombre} por ejecutar el codigo 😀😀😀`);
  }
}

numeroEntero(nombre);
