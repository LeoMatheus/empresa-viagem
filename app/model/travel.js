class Travel {
  constructor(dataPartida, dataChegada, itinerarioId) {
    this.id = Math.round(Math.random() * 10000);
    this.dataPartida = dataPartida;
    this.dataChegada = dataChegada;
    this.itinerarioId = itinerarioId;
  }
}
