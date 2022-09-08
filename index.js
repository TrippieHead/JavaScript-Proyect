//algoritmo para informacion de geneticas

class Geneticas {
    constructor(info) {
        this.nombre = info.nombre;
        this.thc = info.thc;
        this.descripcion = info.descripcion;
    }
    describir (){
        console.log(`Hola me llamo ${this.nombre}, tengo ${this.thc}% de thc y tengo ${this.descripcion}`);
    }
}

const cepa1 = new Geneticas ({
    nombre: 'white widow',
    thc: 16.6,
    descripcion: 'aroma poderoso, agrio y a mofeta, con un sabor cítrico con notas florales',
});

const cepa2 = new Geneticas ({
    nombre: 'gorilla glue',
    thc: 19,
    descripcion: 'olor a roble con sabores citricos',
});

const cepa3 = new Geneticas ({
    nombre: 'black domina',
    thc: 17.5,
    descripcion: 'sabores especiales que entremezclan toques salados con agridulces',
});

const geneticas = [{cepa1}, {cepa2}, {cepa3}];

alert("Elija alguna de las siguientes geneticas: White Widow, Gorilla Glue, Black Domina o coloque ALL para verlas todas");
let ingreseCepa = prompt("Cual genetica le gustaria llevar?");

for (let contador of geneticas) {
    if(ingreseCepa === 'white widow') {
        cepa1.describir();
    }else if(ingreseCepa === 'gorilla glue') {
        cepa2.describir();
    }else if(ingreseCepa === 'black domina') {
        cepa3.describir();
    }else if(ingreseCepa === 'ALL'){
        let mensajeUno = `Nombre: ${cepa1.nombre}, THC: ${cepa1.thc}, descripcion: ${cepa1.descripcion} `;
        let mensajeDos = `Nombre: ${cepa2.nombre}, THC: ${cepa2.thc}, descripcion: ${cepa2.descripcion} `;
        let mensajeTres = `Nombre: ${cepa3.nombre}, THC: ${cepa3.thc}, descripcion: ${cepa3.descripcion} `;
        let mensaje = `
        ${mensajeUno}
        
        ${mensajeDos}
        
        ${mensajeTres}`;
        
        alert(mensaje);
        break;
    }else{
        alert('Ha ingresado una genetica desconocida')
        break;
    }
}
