let Velocidad;
let Tiempo;
let Resultado;
/**Distancia = Velocidad * Tiempo */

button=document.getElementById('btn-MetrosSegundos');

button.addEventListener('click',MetSeg);

function MetSeg(){

    Velocidad = Number(document.getElementById('vel').value);
    Tiempo=Number(document.getElementById('tim').value);

    Resultado = (Velocidad * Tiempo);

    let ImprimirResultado=document.getElementById('DistanciaRecorrida');

    ImprimirResultado.innerText=Resultado;
}
