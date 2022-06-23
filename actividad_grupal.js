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

/** 
 * OTRA PROPUESTA:
 * 
 * let number1 = window.prompt("Escribe tu primera nota")

let number2 = window.prompt("Escribe tu segunda nota")

let number3 = window.prompt("Escribe tu tercera nota")

let number4 = window.prompt("Escribe tu cuarta nota")

let number5 = window.prompt("Escribe tu quinta nota")



let promedio = (number1+number2+number3+number4+number5)/5

if (promedio >= 70){

    alert("Tu curso ha sido aprobado");

}

else {alert("tu curso ha sido reprobado");

}
 * 
 * 
 * **/