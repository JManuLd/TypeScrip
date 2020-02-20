const button = document.getElementById('idCalcular');

button.addEventListener('click',verificarCalificacion);


function verificarCalificacion(){

    const Calificaciones =Number( document.getElementById('Cali').value);

    const DivAlert = document.getElementById('ImprimirResultado');

    if(Calificaciones>8){
         
        DivAlert.innerText= 'Apronado';

     }else{
         DivAlert.innerText='Reprobado';

         const audio = document.getElementById('AudioReprobdao');

         audio.play();
     }

}