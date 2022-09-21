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

let ingreseCepa = document.getElementById('ingreseCepa');

const productosFiltrados = geneticas.filter(item => item.nombre === ingreseCepa.value);

let boton = document.getElementById('btnPrincipal');

boton.addEventListener('click', () => {
    for(const item of productosFiltrados) {
        if(ingreseCepa.value === 'white widow') {
            let cepa = document.createElement('div');
            cepa.innerHTML = cepa1.describir();
            simulador.append(cepa);
        }else if(ingreseCepa.value === 'gorilla glue') {
            let cepa = document.createElement('div');
            cepa.innerHTML = cepa2.describir();
            simulador.append(cepa);
        }else if(ingreseCepa.value === 'black domina') {
            let cepa = document.createElement('div');
            cepa.innerHTML = cepa3.describir();
            simulador.append(cepa);
        }
    }
});

console.log(boton);