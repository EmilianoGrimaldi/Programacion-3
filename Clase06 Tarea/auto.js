class Auto {
  #color = "";
  #precio = 0;
  #marca = "";
  #fecha = Date;

  constructor(color, precio, marca, fecha) {
    this.#color = color;
    this.#precio = precio;
    this.#marca = marca;
    this.#fecha = fecha;
  }

  get color() {
    return this.#color;
  }

  set color(color) {
    this.#color = color;
  }

  get precio() {
    return this.#precio;
  }

  set precio(precio) {
    this.#precio = precio;
  }

  get marca() {
    return this.#marca;
  }

  set marca(marca) {
    this.#marca = marca;
  }

  get fecha() {
    return this.#fecha;
  }

  set fecha(fecha) {
    this.#fecha = fecha;
  }

  AgregarImpuestos(impuesto) {
    return this.#precio + parseFloat(impuesto);
  }

  static MostrarAuto(auto) {
    return `Color: ${auto.color} - Precio: ${auto.precio} - Marca: ${auto.marca} - Fecha: ${auto.fecha}`;
  }

  Equals(auto) {
    return auto.marca === this.#marca;
  }

  static Add(a1, a2) {
    if (a1.marca === a2.marca && a1.color === a2.color) {
      return a1.precio + a2.precio;
    }
    return 0;
  }
}

export { Auto };
//export default Auto;
