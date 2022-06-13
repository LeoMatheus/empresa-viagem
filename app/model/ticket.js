class Ticket {
  constructor(travelId, poltrona, nome, cpf, valor) {
    this.id = Math.round(Math.random() * 10000);
    this.travelId = travelId;
    this.poltrona = poltrona;
    this.nome = nome;
    this.cpf = cpf;
    this.valor = valor;
  }
}
