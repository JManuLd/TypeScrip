let ladoa;
let ladob;
let hipotemusa;
let raiz;
let hipotemusa1;
let hipotemusa2;
button = document.getElementById('btn-Formula');


button.addEventListener('click',CalcularHipotemusa);


function CalcularHipotemusa(){

    ladoa = Number(document.getElementById('LadoA').value);
    ladob = Number(document.getElementById('LadoB').value);

    hipotemusa1 = Math.pow(ladoa,2);
    hipotemusa2 = Math.pow(ladob,2);
    hipotemusa = hipotemusa1 + hipotemusa2;

    raiz = Math.sqrt(hipotemusa);

    let ImprimirResultado = document.getElementById('Himprimirhipotem');

    ImprimirResultado.innerText=raiz;

}