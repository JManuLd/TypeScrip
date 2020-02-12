let base;
let altura;
let resultado;

//let button = document.getElementById('btnrelizarformula');
let btn = document.getElementById('btnrelizarformula');

btn.addEventListener('click',Formula);

function Formula(){
    
    base= Number(document.getElementById('Base').value);
    altura= Number(document.getElementById('Altura').value);
    console.log(base,altura);
    
    resultado = (base * altura);
    resultado=(resultado / 2);

    let ImprimirResultado = document.getElementById('imprimir');
console.log(ImprimirResultado,resultado);

    ImprimirResultado.innerText=resultado;

}
