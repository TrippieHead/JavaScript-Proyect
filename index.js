//algoritmo para determinar si un numero es primo o no

function numeroPrimo (numeroIngresado){
    for(i = 2; i < numeroIngresado - 1; i++){
        if(numeroIngresado % i === 0){
            return "Numero compuesto";
        }
    }

    if(numeroIngresado === 1 || numeroIngresado === 0){
        return "Numero invalido";
    }else{
        return "Numero primo";
    }
}

let numeroIngresado = parseInt(prompt("Ingrese un numero para saber si es un numero primo o compuesto"));
let resultado = numeroPrimo(numeroIngresado);
alert(resultado);

