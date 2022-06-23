let Prom=0;
let suma=0;
let nota=0;

function Promedio (){

    for (i=1; i<=5; i++){
    nota=parseInt(window.prompt("Ingrese nota"));
    suma=suma+nota;
    }

    Prom=suma/5;

    if (Prom>=70){
        alert("Tu curso ha sido aprobado con nota: "+ Prom);
    }
       
    else{
        alert("Tu curso ha sido reprobado con nota: "+ Prom);
    }
   
}

Promedio();