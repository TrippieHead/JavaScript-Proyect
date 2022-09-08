//arrays

const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = ['messi', 'suarez', 'puyol', 'ronaldo'];
const arreglo3 = [true, false, true, false];
// const arreglo4 = [{persona}, {equipo}];
// const arreglo5 = [8, 'mateo', true, {persona}];

console.log(arreglo1[0]);
console.log(arreglo2[3]);
console.log(arreglo3);
console.log(arreglo1[2] + arreglo1[4]);

for(let indice = 0; indice < arreglo2.length; indice++) {
    console.log(arreglo2[indice]);
}

console.log(arreglo2.length);


//metodo push agrega un elemento al FINAL del arreglo

arreglo1.push(18);
console.log(arreglo1.length);
console.log(arreglo1);

//metodo unshift para agregar un elemento al PRINCIPIO del arreglo

arreglo1.unshift(38);
console.log(arreglo1.length);
console.log(arreglo1);

//metodo pop para sacar el ultimo elemento del array

arreglo2.pop();
console.log(arreglo2.length);
console.log(arreglo2);

//metodo shift para eliminar el primer elemento de un array

arreglo2.shift();
console.log(arreglo2.length);
console.log(arreglo2);

//metodo splice para "cortar" los elementos que indiquemos del array

console.log(arreglo1.length);
console.log(arreglo1);

const sobrante = arreglo1.splice(0,3);
console.log(arreglo1.length);
console.log(arreglo1);
console.log(sobrante);

//metodo join para unir los elementos de un mismo array con lo que indiquemos dentro del parentesis

console.log(arreglo3.join('#'));

//metodo concat para unir los elementos de distintos arrays 

const arregloMixto = arreglo1.concat(arreglo2);
console.log(arregloMixto.length);
console.log(arregloMixto);

//metodo slice para copiar un o unos elementos desde el indicado hasta UNO ANTES del otro elemento indicado como final

console.log(arregloMixto.slice(1,5));

//metodo indexOf nos dice la posicion del elemento que coloquemos entre parentesis

console.log(arregloMixto.indexOf('suarez'));
console.log(arregloMixto.indexOf(5));

//metodo includes valida si el elemento contiene el parametro pasado en los parentesis

console.log(arregloMixto.includes('suarez'));
console.log(arregloMixto.includes('messi'));

//metodo reverse voltea el orden de las posiciones de los elementos en el indice del arreglo

console.log(arreglo1.reverse());
console.log(arregloMixto.reverse());

//funcion para eliminar un elemento de un arreglo

const integrantesCampa = ['kevin', 'bertelo', 'jujeno', 'juani', 'yoni', 'santo'];

const eliminar = (nombre) => {
    let eliminado = integrantesCampa.indexOf(nombre);
    if(nombre != -1){
        integrantesCampa.splice(eliminado, 1);
    }

    console.log(integrantesCampa);
}

eliminar('juani');


//arreglos combinados con objetos 

class Productos {
    constructor(info) {
        this.nombre = info.nombre;
        this.precio = info.precio;
        this.cantidad = info.cantidad;
    }
}

const array = [];
for(let i = 0; i < 2; i++){
    let nombre = prompt('Ingrese nombre');
    let precio = prompt('Ingrese precio');
    let cantidad = prompt('Ingrese cantidad');
    let objeto = new Productos(nombre, precio, cantidad);

    array.push(objeto);
    mensaje = `Su producto es ${objeto.nombre}, tiene un precio de $${precio} y hay una cantidad de ${cantidad}`;
}

console.log(mensaje);

//otra forma de definir un arreglo 

const metodoAlternativo = Array.of(1, 2, 3, 4, 5, 'Gato', 'Perro', 'Vaca', [true, false]);
console.log(metodoAlternativo[8][0]);

const prueba = Array(100).fill('MARIHUANA'); 
console.log(prueba);
console.log(prueba.length);

//forEach es un 'reemplazo del for...of', tiene una notacion mejor

let productos = [
    {nombre: 'monitor', precio: 1040},
    {nombre: 'consola', precio: 2500},
    {nombre: 'televisor', precio: 4750},
    {nombre: 'computadora', precio: 8200},
];

productos.forEach(element => {
    alert(element.nombre);
});

productos.forEach((element, index) => {
    console.log(`<li id='${index}'>${element}</li>`);
});