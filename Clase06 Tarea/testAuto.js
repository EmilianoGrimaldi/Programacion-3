import { Auto } from "./auto.js";
//import Auto from "./auto.js";
let a1, a2, a3, a4, a5;
a1 = new Auto("Rojo", 10000000, "Gol Trend", new Date());
a2 = new Auto("Negro", 10000000, "Gol Trend", new Date());
a3 = new Auto("Blanco", 10000000, "Ford", new Date());
a4 = new Auto("Blanco", 30000000, "Audi", new Date());

let autos = [a1, a2, a3, a4];

/*Utilizar el método “AgregarImpuesto” en los últimos tres objetos, agregando $ 1500 al atributo precio. */

a1.AgregarImpuestos(1500);
a2.AgregarImpuestos(1500);
a3.AgregarImpuestos(1500);
a4.AgregarImpuestos(1500);

/*Obtener el importe sumado del primer objeto “Auto” más el segundo y mostrar el resultado obtenido.*/
console.log(a1.precio + a2.precio);

/*Comparar el primer “Auto” con el segundo y quinto objeto e informar si son iguales o no. */
console.log(a1.Equals(a2));
console.log(a1.Equals(a3));
console.log(a1.Equals(a4));

/*Utilizar el método de clase “MostrarAuto” para mostrar cada los objetos impares (1, 3, 5) */

for (let i = 0; i < autos.length; i++) {
  console.log(Auto.MostrarAuto(autos[i]));
}
