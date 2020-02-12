let radio;
let resultado;
let radioelevado
const constantePi =3.1416;

let button= document.getElementById('btncalcular');

button.addEventListener('click',AreaCirculo);

function AreaCirculo(){

    radio=Number(document.getElementById('InpRadio').value);

   // resulatado= constantePi* (radio*radio);

   radioelevado= Math.pow(radio,2);

   resultado=radioelevado*Math.PI;

   let ImprimirResultad = document.getElementById('Resultado');

   ImprimirResultad.innerText=resultado;
   

}