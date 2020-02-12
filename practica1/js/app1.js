
/** 
 * Se declaran las variables  que se utilizaran en el codigo
 */
let numero1;
let numero2;
let resultado;

/**
 * Se declara variable button y se le asigna el boton de sumar dos numeros
 */

let button = document.getElementById('bntres');

button.addEventListener('click',suma);

function suma(){
    
numero1 = Number( document.getElementById('ipnumero1').value);
numero2 = Number(document.getElementById('ipnumero2').value);


 resultado = numero1 + numero2;

 let ImprimirResultado = document.getElementById('imprimirres');

 ImprimirResultado.innerText= resultado;
}

