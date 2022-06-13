'use strict';

const modal = document.querySelector('.modal');
const modalIt = document.querySelector('.itModal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const ticketHolder = document.querySelector('.tickets');
const itinerarioSelect = document.getElementById('itinerario-select');

const btnsOpenModal = document.querySelector('.show-modal');

let itinerarys = JSON.parse(localStorage.getItem('ITINERARY'));
let travels = [];

function onSubmitItinerary(e) {
  e.preventDefault();

  let partida = document.getElementById('date-departure').value;
  let chegada = document.querySelector('#date-arrive').value;
  let itinerario = document.getElementById('itinerario-select').value;

  let travel = new Travel(partida, chegada, itinerario);

  travels = JSON.parse(localStorage.getItem('TRAVEL'));
  travels = travels === null ? [] : travels;
  travels.push(travel);
  localStorage.setItem(TRAVEL_KEY, JSON.stringify(travels));
}

function showTickets() {
  let listItinerary = (element) => {
    for (const i of itinerarys) {
      if (element === i.id) return `${i.origem} - ${i.destino}`;
    }
  };
  let cardBuffer = '';

  for (const e of travels) {
    let card = `<div class="card">
      <h1>Horario</h1>
      <p>${e.id}</p>
      <h2>Partida:</h2>
      <p>${e.dataPartida}</p>
      <h2>chegada:</h2>
      <p>${e.dataChegada}</p>
      <h2>Itinerario ${+e.itinerarioId}<h2>
      <p>${listItinerary(+e.itinerarioId)}</p>
      
      </div>`;

    cardBuffer += card;
  }
  ticketHolder.innerHTML = cardBuffer;
}

function displayItinerary() {
  let optionsHTML = '';

  for (const e of itinerarys) {
    optionsHTML += `<option value="${e.id}">${e.origem} - ${e.destino}</option>`;
  }
  itinerarioSelect.innerHTML = optionsHTML;
}

window.onload = () => {
  travels = JSON.parse(localStorage.getItem('TRAVEL'));
  showTickets();
  displayItinerary();
  document.forms[0].onsubmit = onSubmitItinerary;
};

function closeModal() {
  modalIt.classList.add('hidden');
  // overlay.classList.add('hidden');
}

const openModal = function () {
  modalIt.classList.remove('hidden');
  // overlay.classList.remove('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)

btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.onclick = closeModal;

document.addEventListener('keydown', (e) => {
  // console.log(e.key);

  if (e.key === 'Escape' && !modalIt.classList.contains('hidden')) closeModal();
});
