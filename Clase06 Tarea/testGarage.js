import { Garage } from "./garage.js";
import { Auto } from "./auto.js";

let a1, a2, a3, a4, a5, g;
g = new Garage("Pipo", 10000);
a1 = new Auto("Rojo", 10000000, "Gol Trend", new Date());
a2 = new Auto("Negro", 10000000, "Gol Trend", new Date());
a3 = new Auto("Blanco", 10000000, "Ford", new Date());
a4 = new Auto("Blanco", 30000000, "Audi", new Date());

console.log(g.MostrarGarage());
console.log(g.Equals(a1));
console.log(g.Equals(a2));
console.log(g.Equals(a3));
console.log(g.Equals(a4));
console.log(g.Add(a1));
console.log(g.Add(a2));
console.log(g.Add(a3));
console.log(g.Add(a4));
console.log(g.Equals(a1));
console.log(g.Equals(a2));
console.log(g.Equals(a3));
console.log(g.Equals(a4));
console.log(g.Add(a1));
console.log(g.Add(a2));
console.log(g.Add(a3));
console.log(g.Add(a4));
console.log(g.Remove(a1));
console.log(g.Remove(a1));
