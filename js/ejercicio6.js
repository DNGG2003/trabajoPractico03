/*Dificultad:  🟢🟡
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5

Output: 58
 */

const ladoA = parseFloat(prompt(`Ingresa el alto del rectangulo`));
const ladoB = parseFloat(prompt(`Ingresa el ancho del rectangulo`));

function perimetroRectangulo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert(`Ingresaste un valor erroneo, intentalo nuevamente`);
    return null;
  }
  return 2 * (a + b);
}
const resultado = perimetroRectangulo(ladoA, ladoB);
if (resultado !== null) {
  alert(`El perimetro del rectangulo es = ${resultado}`);
}
