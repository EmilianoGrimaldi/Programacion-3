class Usuario {
  nombre;
  clave;
  email;

  constructor(nombre, clave, email) {
    this.nombre = nombre;
    this.clave = clave;
    this.email = email;
  }

  get Nombre() {
    return this.nombre;
  }

  get Clave() {
    return this.clave;
  }

  get Email() {
    return this.email;
  }

  toString() {
    const cadena = `Nombre: ${this.nombre} Email: ${this.email}`;
    return cadena;
  }

  equals(user) {
    return this.email === user.email;
  }

  equalsUser(user) {
    return this.email === user.email && this.clave === user.clave;
  }

  static Registrar(usuario) {
    const nuevoUsuario = usuario;

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    if (usuarios === undefined || usuarios === null) {
      usuarios = [];
    }

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }

  static listar() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if (usuarios === null || usuarios.length === 0) {
      return "No hay usuarios para mostrar";
    } else {
      return usuarios;
    }
  }

  static login(email, clave) {
    let users = JSON.parse(localStorage.getItem("usuarios"));
    let mensaje;

    if (users === null || users.length === 0) {
      return "No hay usuarios registrados";
    } else {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].clave === clave) {
          mensaje = "Verificado";
          break;
        } else if (users[i].email === email && users[i].clave !== clave) {
          mensaje = "Error en los datos";
          break;
        } else {
          mensaje = "Usuario no registrado";
        }
      }
    }
    return mensaje;
  }
}

export default Usuario;
