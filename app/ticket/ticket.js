'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const travelSelect = document.getElementById('travel-select');
const btnsOpenModal = document.querySelector('.show-modal');
const ticketHolder = document.querySelector('.tickets');

let itinerarys = JSON.parse(localStorage.getItem('ITINERARY'));
let travels = JSON.parse(localStorage.getItem('TRAVEL'));

let tickets = [];

function closeModal() {
  modal.classList.add('hidden');
}

const openModal = function () {
  modal.classList.remove('hidden');
};

btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.onclick = closeModal;

document.addEventListener('keydown', (e) => {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

function listItinerary(element) {
  for (const i of itinerarys) {
    if (element === i.id) return `${i.origem} - ${i.destino}`;
  }
}

function listTravel(element) {
  for (const i of travels) {
    if (element === i.id)
      return (
        `${i.dataPartida} - ${i.dataChegada} </br>` +
        ` ${listItinerary(+i.itinerarioId)}`
      );
  }
}

function displayHorarioItinerario() {
  let optionsHTML = '';

  for (const e of travels) {
    optionsHTML +=
      `<option value="${e.id}">${e.dataPartida} - ${e.dataChegada} &#124;` +
      ` ${listItinerary(+e.itinerarioId)}</option>`;
  }

  travelSelect.innerHTML = optionsHTML;
}

function onSubmitTicket(e) {
  e.preventDefault();

  let nome = nomeVar.value;
  let cpf = document.getElementById('cpf').value;
  let poltrona = document.getElementById('poltrona').value;
  let valor = document.getElementById('valor').value;
  let travel = document.getElementById('travel-select').value;

  let ticket = new Ticket(travel, poltrona, nome, cpf, valor);

  tickets = JSON.parse(localStorage.getItem('TICKETS'));
  tickets = tickets === null ? [] : tickets;
  tickets.push(ticket);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));

  showTickets();
}

function showTickets() {
  let cardBuffer = '';

  for (const e of tickets) {
    let card = `<div class="card">
      <h1>Ticket: ${e.id}</h1>
      <h2>Nome: ${e.nome}</h2>
      <h2>CPF: ${e.cpf}</h2>
      <h2>poltrona: ${e.poltrona}</h2>
      <h2>valor: R$ ${e.valor}</h2>
      <h2>Horario e Itinerario:</h2>
      <h2> ${listTravel(+e.travelId)}</h2>
      </div>`;

    cardBuffer += card;
  }
  ticketHolder.innerHTML = cardBuffer;
}

window.onload = () => {
  tickets = JSON.parse(localStorage.getItem('TICKETS'));
  showTickets();
  displayHorarioItinerario();
  document.forms[0].onsubmit = onSubmitTicket;
};
