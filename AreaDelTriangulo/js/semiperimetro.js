let ladoa;
let ladob;
let ladoc;
let sem;
let areafinal;
let resultado



button = document.getElementById('btn-formula');

button.addEventListener('click',FormulaArea)

function FormulaArea(){

     ladoa = Number(document.getElementById('LadoA').value);
     ladob =Number( document.getElementById('LadoB').value);
     ladoc =Number( document.getElementById('LadoC').value);

     sem = (ladoa + ladob + ladoc)/2;

     areafinal = (sem*(sem-ladoa)*(sem-ladob)*(sem-ladoc));
         
     resultado =Math.sqrt(areafinal); 

     let Imprimirresultado = document.getElementById('ResultadoArea');

     Imprimirresultado.innerText=resultado;
    
}