
const button = document.getElementById('btn-promedio');

button.addEventListener('click',PromediarAlumno);


function PromediarAlumno(){
    const promedio1= Number(document.getElementById('Promedio1').value);
    const promedio2 = Number(document.getElementById('Promedio2').value);
    const promedio3 = Number(document.getElementById('Promedio3').value);

    let Resultado = (promedio1 + promedio2 + promedio3)/3;

    let cadena = `La calificacion es: ${promedio1}`;

    const zonePrint = document.getElementById('ZonePrint');

    if(Resultado>=9){

        let divImprimir= ` <div class="alert alert-success mt-3"><p> El alumno a aprobado </p> </div>   `

        zonePrint.innerHTML=divImprimir;


    }  
    if(Resultado>=6 && Resultado<=9){
        let divImprimir= ` <div class="alert alert-warning mt-3"> El alumno es Regular </div>`       
        
        zonePrint.innerHTML=divImprimir;

        
    }
    else{

        let divImprimir=` <div class"alert alert-danger mt-3"> Reprobado </div> `

        zonePrint.innerHTML=divImprimir;
    }
    


}
