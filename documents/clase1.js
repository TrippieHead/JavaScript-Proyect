// practicas de variables y constantes
let nombre = "Facundo";
let segundoNombre = "Oscar";
let apellido = "Herrera";
const ALTURA  = 1.80;
const PESO  = 85;
//let nombreCompleto = nombre + segundoNombre + apellido;
let nombreCompleto = `${nombre} ${segundoNombre} ${apellido}`;
console.log ("Aqui deberia figurar nombre completo:", nombreCompleto); 
let imc = PESO / ALTURA;
console.log("Aqui deberia aparecer el indice de masa corporal:", imc / 2);



let entrada = prompt("Ingrese su email");
let salida = entrada + " " + "ingresado";
alert(salida);



let numeroUno = parseInt(prompt("Ingrese un numero para sumar"));
//parseInt analiza las entradas y convierte strings en numeros, solo numeros enteros, parseFloat es para cualquier numero real
//Prompt es por defecto string
let numeroDos = parseInt(prompt("Ingrese otro numero"));
let suma = numeroUno + numeroDos;
alert(suma);