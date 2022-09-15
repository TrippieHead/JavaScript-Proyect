//funciones de orden superior

function mayorQue(n) {
    return (m) => m > n;
}

let mayorQueCinco = mayorQue(5);
console.log(mayorQueCinco(7)); //retorna true si el numero ingresado es mayor a 5 o false si es menor

let mayorQueVeinte = mayorQue(20);
console.log(mayorQueVeinte(15));

//funcion de alto orden para realizar las operaciones basicas

function operacionesBasicas(operacion) {

    if(operacion === 'sumar'){
        return (a,b) => a + b;
    }

    if(operacion === 'restar'){
        return (a,b) =>  a - b;
    }

    if(operacion === 'multlipicar'){
        return (a,b) =>  a * b;
    }

    if(operacion === 'dividir'){
        return (a,b) =>  a / b;
    }
}

let suma = operacionesBasicas('sumar');
console.log(suma(5,8));

let resta = operacionesBasicas('restar');
console.log(resta(58,22));

//funcion de orden superior para recorrer un arreglo y mostrarlo por consola

const numeros = [1, 2, 3, 4, 5];

function recorrer(numeros, funcion){
    for(item of numeros){
        funcion(item);
    }
}

recorrer(numeros, console.log); //aqui colocamos la funcion para mostrar por consola directamente como parametro SIN PARENTESIS

//metodos de array avanzados - metodo forEach para recorrer un arreglo

const nombres = ['paicol', 'rafa', 'gonza', 'pablo'];

nombres.forEach((item) => {
    console.log(item);
});

//metodo find para encontrar un valor dentro del array, no devuelve el indice solo el elemento

let productos = [
    {nombre: 'monitor', precio: 1040},
    {nombre: 'consola', precio: 2500},
    {nombre: 'televisor', precio: 4750},
    {nombre: 'computadora', precio: 8200},
];

let producto = productos.find((producto) => producto.nombre === 'monitor');
console.log(producto);

//metodo filter para filtrar ciertos elementos de un array

const cosas = [
    {id: 1, nombre: "camisa", precio: 2000},
    {id: 2, nombre: "pantalon", precio: 1500},
    {id: 3, nombre: "gorra", precio: 110},
    {id: 4, nombre: "zapato", precio: 700},
];

let precio = parseInt(prompt("Ingrese el precio minimo del producto"));
let filtrados = cosas.filter(cosa => cosa.precio > precio);
console.log(filtrados);

//metodo some verifica si al menos uno de los elemento del array cumple la condicion que le pasemos

console.log(productos.some(producto => producto.nombre === 'televisor'));

//let ingreseNombre = prompt('Ingrese el nombre del producto que busca');
//console.log(productos.some(producto => producto.nombre === ingreseNombre)); //es mas dinamico

//metodo maps transforma cada uno de los items segun lo indicado en la arrow function

let nombrecitos = productos.map(nombrecito => nombrecito.nombre);
console.log(nombrecitos);


let nuevosPrecios = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: producto.precio + 2500,
    }
});
console.log(nuevosPrecios);

