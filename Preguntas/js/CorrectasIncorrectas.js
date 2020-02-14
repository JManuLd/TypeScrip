let Correctas;
let Incorrectas;
let NoContestadas;
let Resultado;

button = document.getElementById('btn-Calcular');

button.addEventListener('click',Calcular);

function Calcular(){

    Correctas = Number(document.getElementById('corr').value);
    Incorrectas = Number(document.getElementById('incorr').value);
    NoContestadas = Number(document.getElementById('enblanco').value);


    Resultado= Correctas * 4;
    //Resultado = Incorrectas * -1;
    //Resultado =NoContestadas + 0;
    Resultado= (Resultado - Incorrectas);

    let InmprimirResultado = document.getElementById('CalcularPreguntas');
    InmprimirResultado.innerText=Resultado;

}