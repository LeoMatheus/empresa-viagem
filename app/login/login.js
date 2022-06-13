'use strict';
function initializeUsers() {
  if (localStorage.getItem(USERNAME_KEY) != null) {
    return false;
  }

  const admin = {
    username: USERNAME_KEY,
    password: '123',
    tickets: [],
  };

  adminEstagiario = Object.create(admin);
  adminEstagiario.username = 'Joao';
  adminEstagiario.password = '123';

  localStorage.setItem(USERNAME_KEY, JSON.stringify(admin));
  localStorage.setItem(E_LOGADO, false);
}

function showOperations() {
  const isLoggedIn = JSON.parse(localStorage.getItem(LOGGED_IN_KEY));

  if (isLoggedIn === true) {
    window.open('app/reservas/itinerario.html', '_SELF');
  }
}

window.onload = function () {
  showOperations();
  initializeUsers();

  document.forms[0].onsubmit = function (e) {
    e.preventDefault();

    const username = document.querySelector('#user').value;
    const password = document.querySelector('#psw').value;

    const user = JSON.parse(localStorage.getItem(USERNAME_KEY));

    if (username === user.username && password === user.password) {
      localStorage.setItem(LOGGED_IN_KEY, true);
      window.open('app/reservas/itinerario.html', '_SELF');
    } else {
      if (username.trim().length === 0 || password.trim().length === 0) {
        alert('Os campos são de preenchimento obrigatório!');
      } else {
        window.setTimeout(() => {
          alert(
            'Oppsss!',
            'Por favor, verifique seu nome de usuário ou senha e tente novamente!'
          );
        }, 2000);
      }
    }
  };
};
