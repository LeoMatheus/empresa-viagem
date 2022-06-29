class Ticket {
  constructor(travelId, poltrona, nome, cpf, valor) {
    this.id = Math.round(Math.random() * 10000);
    this.travelId = travelId;
    this.poltrona = poltrona;
    this.nome = nome;
    this.cpf = cpf;
    this.valor = valor;
  }

  // guia de estilo! metodos podem retornar this pra ajudar com encadeamento de metodo
  setUsuario(user) {
    this.user = user;
    return this;
  }
}
