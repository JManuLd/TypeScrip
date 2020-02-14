let Matricula;
let Cal1;
let Cal2;
let Cal3;
let Cal4;
let Cal5;
let resultado;
let ImpMat;

button=document.getElementById('btnGenerarCali');

button.addEventListener('click',CaliMat);

function CaliMat(){

    Matricula=document.getElementById('matricula').value;
    Cal1=Number(document.getElementById('Calificacion1').value);
    Cal2=Number(document.getElementById('Calificacion2').value);
    Cal3=Number(document.getElementById('Calificacion3').value);
    Cal4=Number(document.getElementById('Calificacion4').value);
    Cal5=Number(document.getElementById('Calificacion5').value);

    resultado =(Cal1+Cal2+Cal3+Cal4+Cal5)/5;
    ImpMat=(Matricula);

    let ImprimirResultados = document.getElementById('Resultado');
    let MatriculaImpri = document.getElementById('Mat')

    ImprimirResultados.innerText=resultado;
    MatriculaImpri.innerText=ImpMat;
}