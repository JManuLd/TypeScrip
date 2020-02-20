
const button = document.getElementById('btn-Verificar');

button.addEventListener('click',VerificacionDeUsuario);

function VerificacionDeUsuario(){

    let nombre = document.getElementById('Nom1');
    let nombre2 = document.getElementById('Nom2');
    let edad = Number(document.getElementById('Edad1').value);
    let edad2 = Number(document.getElementById('Edad2').value);

    const DivAlert = document.getElementById('ImprirmResultado');

    if(edad>edad2){

        DivAlert.innerText=nombre;
    }else{
        
        DivAlert.innerText=nombre2;
    }



}