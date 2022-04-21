'use strict';


let header = document.querySelector('.main-head');

(function(){
    alert("Seja bem vindo ao nosso site");
})();

setTimeout(() => {
    if(confirm("Gostaria de receber promoções e pacotes de viagem?")){
        let email = prompt("Nos informe seu email");
    
        if(email !== null){
            alert("Email cadastrado com sucesso");
        } else{
            alert("Campo Vazio")
        }
        
    }
}, 1000);




let mudarCorHeader = function(){
    let cores = ["#6A9CD9", "#B0C5DF", "#474F59", "#5177A6"];
    
    let i = Math.floor(Math.random() * cores.length);
   
    header.style.backgroundColor = cores[i];
}

setInterval(mudarCorHeader, 2000);
