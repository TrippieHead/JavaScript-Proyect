//algoritmo para informacion de geneticas

class Geneticas {
    constructor(nombre, thc, descripcion, precio) {
        this.nombre = nombre;
        this.thc = thc;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    describir () {
        return `Hola me llamo ${this.nombre}, tengo ${this.thc}% de thc y tengo ${this.descripcion}.`;
    }
};

const cepa1 = new Geneticas ('white widow', 16.6, 'aroma poderoso, agrio y a mofeta, con un sabor cítrico con notas florales', 150);

const cepa2 = new Geneticas (
    'gorilla glue',
    19,
    'olor a roble con sabores citricos',
    500,
);

const cepa3 = new Geneticas (
    'black domina',
    17.5,
    'sabores especiales que entremezclan toques salados con agridulces',
    700,
);

const geneticas = [cepa1, cepa2, cepa3];

let mainIndex = document.getElementById('mainIndex');
let simulador = document.createElement('div');
simulador.innerHTML = '<h5>Elija alguna de las siguientes geneticas: White Whidow, Gorilla Glue o Black Domina</h5>';
mainIndex.append(simulador);

let ingreseCepa = prompt('Ingrese su cepa');

productosFiltrados = geneticas.filter(item => item.nombre === ingreseCepa);

for(const item of productosFiltrados) {
    if(ingreseCepa === 'white widow') {
        let cepa = document.createElement('div');
        cepa.innerHTML = cepa1.describir();
        simulador.append(cepa);
    }else if(ingreseCepa === 'gorilla glue') {
        let cepa = document.createElement('div');
        cepa.innerHTML = cepa2.describir();
        simulador.append(cepa);
    }else if(ingreseCepa === 'black domina') {
        let cepa = document.createElement('div');
        cepa.innerHTML = cepa3.describir();
        simulador.append(cepa);
    }
}

// let precio = parseFloat(prompt('Ingrese el precio minimo'));
// let filtro = geneticas.filter((genetica) => genetica.precio > precio);
// console.log(filtro);

// if(precio < 150){
//     alert(`White Widow: $${cepa1.precio}, Gorilla Glue: $${cepa2.precio}, Black Domina: $${cepa3.precio}`);
// }else if(precio < 500){
//     alert(`Gorilla Glue: $${cepa2.precio}, Black Domina: $${cepa3.precio}`);
// }else{
//     alert(`Black Domina: $${cepa3.precio}`);
// }

//let pregunta = prompt('Ingrese "all" para ver todas las geneticas disponibles y su informacion');
// if(pregunta === 'all'){
//     let mensajeUno = `Nombre: ${cepa1.nombre}, THC: ${cepa1.thc}%, descripcion: ${cepa1.descripcion} `;
//     let mensajeDos = `Nombre: ${cepa2.nombre}, THC: ${cepa2.thc}%, descripcion: ${cepa2.descripcion} `;
//     let mensajeTres = `Nombre: ${cepa3.nombre}, THC: ${cepa3.thc}%, descripcion: ${cepa3.descripcion} `;
//     let mensaje = `
//     ${mensajeUno}
    
//     ${mensajeDos}
    
//     ${mensajeTres}`;
    
//     alert(mensaje);
// }else{
//     alert('Ha ingresado un valor incorrecto');
// }
