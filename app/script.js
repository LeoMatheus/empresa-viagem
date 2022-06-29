'use strict';

let header = document.querySelector('.main-head');
let formEmail = document.forms[0];
let nome = document.getElementById('name');

console.log(formEmail);

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
  // guia de estilo usar '' para strings
  // guia de estilo quebrar linha nas arrays
  let cores = ['#6A9CD9', '#B0C5DF', '#474F59', '#5177A6'];

  let i = Math.floor(Math.random() * cores.length);

  header.style.backgroundColor = cores[i];
};

setInterval(mudarCorHeader, 2000);

let aparecerTexto = function () {
  $(this).find('p').fadeToggle('slow');
};

function armazenarNomeEEmail(a) {
  return function (b) {
    alert(`Nome: ${a} e e-mail: ${b} armazenados com sucesso`);
  };
}

function naoClickeNoSegredo() {
  alert('Não clique aqui é secreto!!');
}

nome.addEventListener('blur', (e) => {
  if (nome.value === '') {
    e.preventDefault();
    console.log('Valor não pode ser vazio');
  }
});

$('.email').bind('invalid', (e) => {
  e.preventDefault();

  this.setCustomValidity(this.validity.stepMismatch ? 'Um email válido!' : '');
});

function aparecerCep() {
  let cep = $('#cep').val();
  let servico = `http://viacep.com.br/ws/${cep}/json/`;
  $.get(servico, function (conteudo) {
    console.log(conteudo);
    // guia de estilo! nao usar concatenação em mensagens longas
    // guia de estilo! utilizar template string e sem espaço entre as aspas
    alert(`Cep correspondente a cidade: ${conteudo.localidade}, 
    rua: ${conteudo.logradouro}, bairro: ${conteudo.bairro}`);
  });
}

window.onload = function () {
  // welcome();
  $('.card').click(aparecerTexto);

  formEmail.addEventListener('submit', (e) => {
    e.preventDefault();

    let nomeValor = nome.value;
    let email = document.getElementById('email').value;

    armazenarNomeEEmail(nomeValor)(email);
    aparecerCep();
  });

  $('.benefit-head').click(function () {
    $(this).find('h3').addClass('italics');
  });

  $('#cep').mask('00000-000');
};
