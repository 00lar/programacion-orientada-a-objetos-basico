let matriz = [
  [4, 1, 6, 3],
  [6, 2, 5, 4],
  [9, 8, 1, 6],
  [2, 5, 3, 2],
];
let suma = 0;

for (let i = 0; i < 3; i++) {
  for (let n = 0; n < 3; n++) {
    suma = suma + matriz[i][n];
  }
}

console.log("El resultado es", suma);

Inicio
matriz <- [[4, 1, 6, 3], [6, 2, 5, 4], [9, 8, 1, 6], [2, 5, 3, 2]]
suma <- 0

Para i desde 0 hasta 3 con paso 1 hacer
Para n desde 0 hasta 3 con paso 1 hacer
suma <- suma + matriz[i][n]
Fin Para
Fin Para

Escribir "El resultado es", suma
Fin