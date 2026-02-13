/*Dificultad:  🟢🟡🔴

3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */

let apariciones = [];

//La variable posicionesArray sirve para inicializar el array en 0
for (let posicionesArray = 0; posicionesArray <= 12; posicionesArray++) {
  apariciones[posicionesArray] = 0;
}

//La variable lanzamientos sirve para simular los 50 lanzamientos de los dados
for (let lanzamientos = 1; lanzamientos <= 50; lanzamientos++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  let suma = dado1 + dado2;

  apariciones[suma]++;
}

document.writeln(
  `<table class = "table table-bordered border-primary">
    <thead>
    <tr>
    <th>Suma🎲🎲</th>
    <th>Apariciones</th>
    </tr>
    </thead>
    <tbody>`,
);

for (let i = 2; i <= 12; i++) {
  document.writeln(`
    <tr>
      <td>${i}</td>
      <td>${apariciones[i]}</td>
    </tr>
  `);
}

document.writeln(`</tbody></table>`);
