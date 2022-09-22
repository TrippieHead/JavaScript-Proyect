class Entradas {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

const entrada1 = new Entradas (
    'tini',
    'El dia 15 de noviembre - PREDIO FERIAL',
    4500,
);

const entrada2 = new Entradas (
    'guasones',
    'El dia 13 de octubre - PREDIO VILLACUBAS',
    5000,
);

const entrada3 = new Entradas (
    'stephan bodzin',
    'El dia 6 de diciembre - ESTADIO BICENTENARIO',
    8800,
);

const stock = [entrada1, entrada2, entrada3];

let buscadorEntrada = document.getElementById('buscadorEntrada');
let input = document.getElementById('ingreseEntrada');
let boton = document.getElementById('btnEntrada');

const entradaFiltrada = stock.filter(item => item.nombre === input.value);

boton.addEventListener('click', () => {
    for(const item of entradaFiltrada) {
        if(input.value === 'tini') {
            let entrada = document.createElement('div');
            entrada.innerHTML = `Has seleccionado la entrada para ver a ${entrada1.nombre}.
            ${entrada1.descripcion}
            $${entrada1.precio}`;
            buscadorEntrada.append(entrada);
        }else if(input.value === 'guasones') {
            let entrada = document.createElement('div');
            entrada.innerHTML = `Has seleccionado la entrada para ver a ${entrada2.nombre}.
            ${entrada2.descripcion}
            $${entrada2.precio}`;
            buscadorEntrada.append(entrada);
        }else if(input.value === 'stephan bodzin') {
            let entrada = document.createElement('div');
            entrada.innerHTML = `Has seleccionado la entrada para ver a ${entrada3.nombre}.
            ${entrada3.descripcion}
            $${entrada3.precio}`;
            buscadorEntrada.append(entrada);
        }else{
            let alerta = document.createElement('div');
            alerta.innerHTML = '<br>Has ingresado una entrada incorrecta</br>';
            buscadorEntrada.append(alerta);
        }
    }
});

const guardar = localStorage.setItem('datos', input.value);