class Itinerario {
  constructor(origem, destino) {
    this.id = Math.round(Math.random() * 10000);
    this.origem = origem;
    this.destino = destino;
  }
}
