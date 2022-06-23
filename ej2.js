var nombre=prompt("¿Cuál es tu nombre?");
var edad=prompt("¿cual es tu edad?");

function permiso(x,y){
    if (Number(y)<18){
        window.alert(x+", no puedes solicitar permiso");
    }
    else{
        window.alert(x+", puedes solicitar permiso");

    }

}
permiso(nombre,edad)