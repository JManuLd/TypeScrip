let  metros;
let Cubicos;
let resultado;


button = document.getElementById('btn-Conversion');

button.addEventListener('click',Convertidor);

function Convertidor(){

    metros = Number(document.getElementById('Metros').value);
    
    Cubicos = Math.pow(metros,3);

    let ImprimirResultado = document.getElementById('ResultadoConversion');

    ImprimirResultado.innerText=Cubicos;
}