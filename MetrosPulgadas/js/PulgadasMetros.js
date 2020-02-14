let metros;
const Pulgadas = 39.37;
let resultado;

button = document.getElementById('btn-Convertidor');

button.addEventListener('click',convertidorPulgadas);


function convertidorPulgadas(){

    metros = Number(document.getElementById('Metros').value);

    resultado = metros * Pulgadas;

    let ImprimirRespuesta = document.getElementById('ResultadoPulgadas');

    ImprimirRespuesta.innerText=resultado;

}