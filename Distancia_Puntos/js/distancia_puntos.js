let Distnacia_x1;
let Distancia_x2;
let Distancia_y1;
let Distancia_y2;
let Distancia1;
let Distancia2;
let resultado;

button = document.getElementById('btn-distancia');

button.addEventListener('click',Distancia);

function Distancia(){

    Distancia_x1= Number(document.getElementById('X1').value);
    Distancia_x2=Number(document.getElementById('X2').value);
    Distancia_x1=Number(document.getElementById('Y1').value);
    Distancia_x2=Number(document.getElementById('Y2').value);

    Distancia1 = (Distancia_x2 - Distancia_x1);
    Distancai2 =  (Distancia_y2 - Distancia_y1);
    Distancia = Math.pow(Distancia1,2) + (Distancia2,2);
    
    resultado = Math.sqrt(Distancia);
    
    let ImprimirResultado = document.getElementById('ResultadoDistancia');

    ImprimirResultado.innerText=resultado;

}