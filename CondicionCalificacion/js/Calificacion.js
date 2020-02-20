

const button = document.getElementById('btn-Calcular');


button.addEventListener('click',ReprobadoAprobado);

function ReprobadoAprobado(){

    let Calificacion = Number(document.getElementById('Cali').value);

    const divAlert = document.getElementById('ImprimirResultado');
    if(Calificacion>8){
        divAlert.innerText='Aprobado';
    }else{
        divAlert.innerText='Reprobado';
    }

}