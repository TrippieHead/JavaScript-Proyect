//algoritmo para informacion de geneticas

class Geneticas {
    constructor(info) {
        this.nombre = info.nombre;
        this.thc = info.thc;
        this.descripcion = info.descripcion;
        this.precio = info.precio;
    }
    describir (){
        console.log(`Hola me llamo ${this.nombre}, tengo ${this.thc}% de thc y tengo ${this.descripcion}`);
    }
}

const cepa1 = new Geneticas ({
    nombre: 'white widow',
    thc: 16.6,
    descripcion: 'aroma poderoso, agrio y a mofeta, con un sabor cítrico con notas florales',
    precio: 150,
});

const cepa2 = new Geneticas ({
    nombre: 'gorilla glue',
    thc: 19,
    descripcion: 'olor a roble con sabores citricos',
    precio: 500,
});

const cepa3 = new Geneticas ({
    nombre: 'black domina',
    thc: 17.5,
    descripcion: 'sabores especiales que entremezclan toques salados con agridulces',
    precio: 700,
});

const geneticas = [cepa1, cepa2, cepa3];

alert("Elija alguna de las siguientes geneticas: White Widow, Gorilla Glue, Black Domina");
let ingreseCepa = prompt("Cual genetica le gustaria llevar?");

geneticas.forEach((item) => { 
    if(ingreseCepa === 'white widow') {
        cepa1.describir();
    }else if(ingreseCepa === 'gorilla glue') {
        cepa2.describir();
    }else if(ingreseCepa === 'black domina') {
        cepa3.describir();
    }else{
        alert('Ha ingresado una genetica desconocida')
    }
});

let precio = parseInt(prompt('Ingrese el precio minimo'));
let filtro = geneticas.filter((genetica) => genetica.precio > precio);
console.log(filtro);

if(precio < 150){
    alert(`White Widow: $${cepa1.precio}, Gorilla Glue: $${cepa2.precio}, Black Domina: $${cepa3.precio}`);
}else if(precio < 500){
    alert(`Gorilla Glue: $${cepa2.precio}, Black Domina: $${cepa3.precio}`);
}else{
    alert(`Black Domina: $${cepa3.precio}`);
}

let pregunta = prompt('Ingrese "all" para ver todas las geneticas disponibles y su informacion');

if(pregunta === 'all'){
    let mensajeUno = `Nombre: ${cepa1.nombre}, THC: ${cepa1.thc}%, descripcion: ${cepa1.descripcion} `;
    let mensajeDos = `Nombre: ${cepa2.nombre}, THC: ${cepa2.thc}%, descripcion: ${cepa2.descripcion} `;
    let mensajeTres = `Nombre: ${cepa3.nombre}, THC: ${cepa3.thc}%, descripcion: ${cepa3.descripcion} `;
    let mensaje = `
    ${mensajeUno}
    
    ${mensajeDos}
    
    ${mensajeTres}`;
    
    alert(mensaje);
}else{
    alert('Ha ingresado un valor incorrecto');
}
