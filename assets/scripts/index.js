'use strict';

$(function () {
  $('#btn1').click(ajaxComParametros);
  $('#btn2').click(ajaxSemParametros);
  $('#btn3').click(ajaxComCallbackFail);
  $('#btn4').click(ajaxComCallback);
});

function ajaxComCallbackFail() {
  var servico = 'http://localhost:3000/error';
  $.get(servico)
    .done(function (data) {
      $('#meuSpan').text(data);
    })
    .fail(function (data) {
      $('#meuSpan').text(data.responseText);
    });
}

function ajaxComCallback() {
  var parametros = {
    nome: 'Caro Aluno',
  };
  var servico = 'http://localhost:3000/oi';
  var xhr = $.get(servico, parametros);
  xhr.done(function (data) {
    console.log(data);
    $('#meuSpan').text(data.name);
  });
}

function ajaxSemParametros() {
  var servico = 'http://localhost:3000/oi';
  $.get(servico, function (data) {
    console.log(data);
    $('#meuSpan').text(data.name);
  });
}

function ajaxComParametros() {
  var parametros = {
    nome: 'Roni',
  };
  var servico = 'http://localhost:3000/oi';
  $.get(servico, parametros, function (data) {
    console.log(data);
    $('#meuSpan').text(data.name);
  });
}
