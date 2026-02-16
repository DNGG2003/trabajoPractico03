/*Dificultad:  🟢🟡
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

const nombre = prompt(`Ingresa tu nombre`);
function texto(nombre) {
  do {
    const texto = prompt(`Ingresa un texto`);
    if (texto === null) {
      alert(`Ingresaste un valor erroneo, intenalo nuevamente`);
      break;
    } else if (texto === texto.toLowerCase()) {
      alert(`El texto que ingresaste tiene minusculas`);
    } else if (texto === texto.toUpperCase()) {
      alert(`El texto que ingresaste tiene mayusculas`);
    } else {
      alert(
        `El texto que ingresaste tiene una convinacion de mayusculas y minusculas`,
      );
    }
  } while (window.confirm(`¿Deseas agregar otro texto?`));
  alert(
    `Gracias ${nombre} por ejecutar el programa, que tenga un buen dia😃😃😃😃😃😃`,
  );
}

texto(nombre);
