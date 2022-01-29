let imagem;

function ligarLampada(){
    document.getElementById('lampada').src= './img/ligada.jpg'
}

function desligarLampada(){
    document.getElementById('lampada').src= './img/desligada.jpg'
}
function quebrarLampada(){
    document.getElementById('lampada').src= './img/quebrada.jpg'
}

document.getElementById('ligar').addEventListener('click',ligarLampada);
document.getElementById('desligar').addEventListener('click',desligarLampada);
document.getElementById('ligar').addEventListener('dblclick',quebrarLampada);

/*
const luminosidade= document.querySelectorall("#ligar");


    luminosidade.forEach(function(tecla){
        tecla.addEventListener("click", ligarLampada);
    });

    const escuro= document.querySelector("#desligar");
escuro.forEach(function(tecla){
    tela.addEventListener("click",desligarLampada);
});
*/