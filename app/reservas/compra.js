"use strict";

const modal = document.querySelector(".modal");
// const modalIt = document.querySelector(".itModal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const ticketHolder = document.querySelector(".tickets");

const btnsOpenModal = document.querySelector(".show-modal");

let itinerarys = [];

function onSubmitItinerary(e) {
  e.preventDefault();

  let origem = document.getElementById("city-departure").value;
  let destino = document.querySelector("#city-arrive").value;

  let itinerary = new Itinerario(origem, destino);
  console.log(itinerary);

  itinerarys = JSON.parse(localStorage.getItem("ITINERARY"));
  itinerarys = itinerarys === null ? [] : itinerarys;
  itinerarys.push(itinerary);
  localStorage.setItem(ITINERARY_KEY, JSON.stringify(itinerarys));

  showTickets();

  // return false;
}

function showTickets() {
  let cardBuffer = "";

  for (const e of itinerarys) {
    let card = `<div class="card">
    <h1>Ticket </h1>
    <p>${e.id}</p>
    <h2>Cidade Origem:</h2>
    <p>${e.origem}</p>
    <h2>Cidade Destino:</h2>
    <p>${e.destino}</p>
    </div>`;

    cardBuffer += card;
  }
  ticketHolder.innerHTML = cardBuffer;
}

function listTickets() {
  console.log(localStorage.getItem(TICKETS_KEY));
}

window.onload = () => {
  showTickets();
  document.forms[0].onsubmit = onSubmitItinerary;
};

function closeModal() {
  modal.classList.add("hidden");
  // overlay.classList.add('hidden');
}

const openModal = function () {
  modal.classList.remove("hidden");
  // overlay.classList.remove('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.onclick = closeModal;

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
