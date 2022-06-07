'use strict';

let header = document.querySelector('.main-head');

function welcome() {
  window.alert('Seja bem vindo ao nosso site');
}

// setTimeout(() => {
//   if (window.confirm('Gostaria de receber promoções e pacotes de viagem?')) {
//     let email = window.prompt('Nos informe seu email');

//     if (email !== null) {
//       window.alert('Email cadastrado com sucesso');
//     } else {
//       window.alert('Campo Vazio');
//     }
//   }
// }, 1000);

let mudarCorHeader = function () {
  let cores = ['#6A9CD9', '#B0C5DF', '#474F59', '#5177A6'];

  let i = Math.floor(Math.random() * cores.length);

  header.style.backgroundColor = cores[i];
};

setInterval(mudarCorHeader, 2000);

window.onload = function () {
  // welcome();
};
