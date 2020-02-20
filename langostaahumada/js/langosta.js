
const button = document.getElementById('btn-costodeplatillo');

button.addEventListener('click',Platillos)

function Platillos(){

    const NumPlatillo = Number(document.getElementById('NumeroDePersonas').value);

    //Paltoporpersona = ;

    const zonePrint = document.getElementById('ImprimirResultado');
    if(NumPlatillo == 1){
      
        let divImprimir = ` <div class=" alert alert-danger mt-3"> El costo final del platillo 95</div> `;
   
    }
    else
   
    if (NumPlatillo>=200 && NumPlatillo<300){

        let platoporpersona =(NumPlatillo*85);
        let divImprimir = ` <div class=" alert alert-danger mt-3"> El costo final del platillo ${platoporpersona} </div> `;

        zonePrint.innerHTML=divImprimir;
    }
    else

    if(NumPlatillo>300){

        let divImprimir = ` <div class=" alert alert-danger mt-3"> El costo es de $75.00 </div>`;
        zonePrint.innerHTML=divImprimir;
    }
    

}