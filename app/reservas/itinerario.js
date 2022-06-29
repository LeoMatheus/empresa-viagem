'use strict';

(function () {
  const modal = document.querySelector('.modal');
  // const modalIt = document.querySelector(".itModal");
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.close-modal');
  const ticketHolder = document.querySelector('.tickets');

  const btnsOpenModal = document.querySelector('.show-modal');

  // guia de estilo iniciou com literal
  let itinerarys = [];

  function showTickets() {
    let cardBuffer = '';

    for (const e of itinerarys) {
      let card = `<div class="card">
      <h1>Itinerario: ${e.id}</h1>
      <h2>Cidade Origem: ${e.origem}</h2>
      <h2>Cidade Destino: ${e.destino}</h2>
      </div>`;

      cardBuffer += card;
    }
    ticketHolder.innerHTML = cardBuffer;
    ticketHolder.onclick = function (e) {
      console.log(e.target.parentElement);
      // e.target.parentElement.style.backgroundColor = '#60b347';
      $(e.target).parent('div').css('backgroundColor', '#60b347');
    };
  }

  function onSubmitItinerary(e) {
    e.preventDefault();

    let origem = document.getElementsByName('city-departure')[0].value;
    let destino = document.querySelector('#city-arrive').value;

    let itinerary = new Itinerario(origem, destino);
    console.log(itinerary);

    itinerarys = JSON.parse(localStorage.getItem('ITINERARY'));
    itinerarys = itinerarys === null ? [] : itinerarys;

    // guia de estilo use o push
    itinerarys.push(itinerary);
    localStorage.setItem(ITINERARY_KEY, JSON.stringify(itinerarys));

    showTickets();

    // return false;
  }

  window.onload = () => {
    itinerarys = JSON.parse(localStorage.getItem('ITINERARY'));
    showTickets();
    document.forms[0].onsubmit = onSubmitItinerary;
  };

  function closeModal() {
    modal.classList.add('hidden');
  }

  const openModal = function () {
    modal.classList.remove('hidden');
  };

  btnsOpenModal.addEventListener('click', openModal);

  btnCloseModal.onclick = closeModal;

  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });
})();
