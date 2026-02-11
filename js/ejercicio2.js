/*Dificultad:  🟢🟡
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
 */

const arrayCiudades = [];

do {
  const pedirCiudades = prompt(`Ingresa las ciudades que quieras`);
  if (pedirCiudades.length === 0) {
    alert(`Ingresaste un valor erroneo, intentalo nuevamente`);
  } else {
    arrayCiudades.push(pedirCiudades);
  }
} while (
  window.confirm(
    `Apreta aceptar para agregar más ciudades o cancelar para ver el array que hiciste`,
  )
);

//Longitud del array
document.writeln(
  `<p>El arreglo de ciudades tiene ${arrayCiudades.length} elementos</p>`,
);
//Items de la primera, tercera y ultima posicion
document.writeln(
  `<ul>
    <li>Elemento 1er posicion: ${arrayCiudades[0]} </li>
    <li>Elemento 3ra posicion: ${arrayCiudades[2]}</li>
    <li>Elemento ultima posicion: ${arrayCiudades[arrayCiudades.length - 1]}</li>
  </ul>`,
);

//Añadir en la ultima posición la ciudad de Paris
arrayCiudades.push("Paris");
console.log(arrayCiudades);
document.writeln(
  `<li>Elemento ultima posición: ${arrayCiudades[arrayCiudades.length - 1]}</li>`,
);

//Elemento que ocupa la segunda posicion del array
console.log(arrayCiudades[2]);

//Sustitución del elemento que ocupa la segunda posición por la ciudad de "Barcelona"
arrayCiudades.splice(1, 0, "Barcelona");

//Lista del array de ciudades
document.writeln(`<h1>Arreglo de ciudades</h1>`);
for (let i = 0; i < arrayCiudades.length; i++) {
  document.writeln(`<ul><li>Elemento: ${arrayCiudades[i]}</li></ul>`);
}
