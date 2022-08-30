//funciones

function calculadora(numeroUno, numeroDos, operacion){
    switch(operacion){
        case "+":
            return numeroUno + numeroDos;
        case "-":
            return numeroUno - numeroDos;
        case "*":
            return numeroUno * numeroDos;
        case "/":
            return numeroUno / numeroDos;  
        default:
            return "Operacion no reconocida";
    }
}

let numeroUno = parseInt(prompt("Ingrese un numero"));
let operacion = prompt("Ingrese la operacion que desea realizar");
let numeroDos = parseInt(prompt("Ingrese otro numero"));
let resultado =  calculadora(numeroUno, numeroDos, operacion);
alert(resultado);



//algoritmo para saber si un numero es par o impar

// let numero = parseInt(prompt("Ingrese un numero para saber si es un numero par o impar"));
// while(numero != " "){
//     if(numero % 2 == 0){
//         alert("Tu numero es par");
//     }else{
//         alert("Tu numero es impar");
//     }
//     numero = parseInt(prompt("Ingrese un numero para saber si es un numero par o impar"));
// }




//arrow function (funcion flecha)

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva = x => x * 0.21;

let precio = 1000;
let descuento = 100;

let nuevoPrecio = resta(suma(precio, iva(precio)), descuento);

console.log(nuevoPrecio);




//algoritmo para informacion de geneticas

alert("Elija alguna de las siguientes geneticas: White Widow, Gorilla Glue, Black Domina");
let ingreseCepa = prompt("Cual genetica le gustaria llevar?");

while(ingreseCepa != "esc"){
    if(ingreseCepa === "gorilla glue"){
        mensajeUno = "16.6% THC, sativa hibrida";
        mensajeDos = "aroma poderoso, agrio y a mofeta, con un sabor cítrico con notas florales";
        descripcion = `${mensajeUno} y ${mensajeDos}`;
        alert(descripcion);
    }else if(ingreseCepa.toLowerCase() === "white widow"){
        mensajeUno = "19% THC con predominancia sativa";
        mensajeDos = "olor a roble con sabores citricos";
        descripcion = `${mensajeUno} y ${mensajeDos}`;
        alert(descripcion);
    }else if(ingreseCepa.toLowerCase() === "black domina"){
        mensajeUno = "17.5% THC totalmente indica";
        mensajeDos = "sabores especiales que entremezclan toques salados con agridulces";
        descripcion = `${mensajeUno} y ${mensajeDos}`;
        alert(descripcion);
    }else{
        alert("cepa no identificada");
    }

    ingreseCepa = prompt("Cual genetica le gustaria llevar?");
} 














