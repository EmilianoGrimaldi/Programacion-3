class Garage {
  #razonSocial;
  #precioPorHora;
  #autos;

  constructor(razonSocial, precioPorHora) {
    this.#razonSocial = razonSocial;
    this.#precioPorHora = precioPorHora;
    this.#autos = [];
  }

  MostrarGarage() {
    return `Razon social: ${this.#razonSocial} - Precio por hora: $${
      this.#precioPorHora
    }`;
  }

  Equals(auto) {
    return this.#autos.includes(auto);
  }

  Add(auto) {
    if (!this.Equals(auto)) {
      this.#autos.push(auto);
      return "Añadido al garage";
    }
    return "Ya esta en el garage";
  }

  Remove(auto) {
    let index = this.#autos.indexOf(auto);
    if (index !== -1) {
      this.#autos.splice(index, 1);
      return "Auto removido con exito";
    }
    return "Auto no esta en el garage";
  }
}

export { Garage };
