let hotel;
let comida;
const cien = 100;
let MonTotal;
let dias;
let CantidadDelDia; 

button = document.getElementById('btn-Monto');

button.addEventListener('click',MontoTotal);


function MontoTotal(){

    hotel = Number(document.getElementById('Hotel').value);
    comida = Number(document.getElementById('Comida').value);
    dias = Number(document.getElementById('Dias').value);

    CantidadDelDia = hotel + comida + cien;

    MonTotal = dias * CantidadDelDia;

    let ImprimirResultado = document.getElementById('ResultadoDeMonto');

    ImprimirResultado.innerText=MonTotal;
}