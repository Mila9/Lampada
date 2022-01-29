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
