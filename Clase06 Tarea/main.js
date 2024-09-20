import Usuario from "./usuario.js";

let usuarios = [];
let u1 = new Usuario("Emiliano", "1234", "emiliano@gmail.com");
let u2 = new Usuario("Nahuel", "4321", "nahuel@gmail.com");
let u3 = new Usuario("Lautaro", "2134", "lautaro@gmail.com");

//Usuario.Registrar(u3);
console.log(Usuario.listar());
let email = "nahuel@gmail.com";
let clave = "4321";
console.log(Usuario.login(email, clave));
