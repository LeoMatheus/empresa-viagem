'use strict';
var i = 0;

let header = document.querySelector('.main-head');

// if(confirm("Gostaria de receber promoções e pacotes de viagem?")){
//     let email = prompt("Nos informe seu email");

//     if(email !== null){
//         alert("Email cadastrado com sucesso");
//     } else{
//         alert("Campo Vazio")
//     }
    
// }


let mudarCorHeader = function(){
    let cor = ["#6A9CD9", "#B0C5DF", "#474F59", "#5177A6"];

    header.style.backgroundColor = cor[i];
    i = (i + 1) % cor.length;
}

// setInterval(mudarCorHeader, 1000);
