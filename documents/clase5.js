//como crear objetos

const persona = {nombre: "facundo", edad: 24, profesion: "estudiante"};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

//otra forma de acceder al objeto

let trabajo = "profesion";

console.log(persona["edad"]);
console.log(persona[trabajo]);
console.log(persona["nombre"]);

//podemos re-asignar valores a las propiedades del objeto

persona["edad"] = 57;
persona[trabajo] = "desarrollador web";
persona.nombre = "Juan Cruz";

console.log(persona);


//funcion constructora

function Usuario(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
}

// const usuario1 = new Usuario(username, password, email);
// let username = prompt("ingrese aqui su nombre de usuario");
// let password = prompt("ingrese aqui su contrasena");
// let email = prompt("ingrese aqui su email");


function Persona(info){
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.trabajo = info.trabajo;
    this.colorOjos = info.colorOjos;
    this.colorPelo =  info.colorPelo;
    this.hablar = function() {console.log('Hola soy' + " " + this.nombre);}
}

let persona1 = new Persona({
    nombre: 'facundo',
    edad: 24,
    trabajo: 'programador',
    colorOjos: 'verdes',
    colorPelo: 'negro',
})

persona1.hablar();

let persona2 = new Persona({
    nombre: 'oscar',
    edad: 49,
    trabajo: 'comerciante',
    colorOjos: 'marrones',
    colorPelo: 'nulo',
})

let persona3 = new Persona({
    nombre: 'santiago',
    edad: 23,
    trabajo: 'ingeniero quimico',
    colorOjos: 'marrones',
    colorPelo: 'rubito',
})

console.log(persona1);
console.log(persona2['nombre']);
console.log(persona3);



//operador in y bucle in...for

let cepa = {nombre: 'Afghana', thc: 19, raza: 'indica', color: 'verde'};

console.log('nombre' in cepa);
console.log('name' in cepa);

for(const propiedades in cepa){
    console.log(propiedades);
    console.log(cepa[propiedades]);
    //console.log(cepa);
}



//clases

class Cepas {
    constructor(descripcion) {
        this.nombre = descripcion.nombre;
        this.thc = descripcion.thc;
        this.raza = descripcion.raza;
        this.color = descripcion.color;
        this.cantidad = descripcion.cantidad;
    }

    describir(){
        console.log(`Hola me llamo ${this.nombre}, tengo ${this.thc}% de thc, soy de raza ${this.raza} y color ${this.color} `);
    }

    vender(){
        this.cantidad = this.cantidad - 1;
    }
}


const cepa1 = new Cepas({
    nombre: 'Afghana',
    color: 'verde',
    raza: 'indica',
    thc: 19,
    cantidad: 10,
});

const cepa2 = new Cepas({
    nombre: 'Black Domina',
    color: 'verde',
    raza: 'hibrida sativa',
    thc: 17.5,
    cantidad: 10,
});

const cepa3 = new Cepas({
    nombre: 'AK-47',
    color: 'verde',
    raza: 'hibrida sativa',
    cantidad: 10,
    thc: 19.5,
});

const cepa4 = new Cepas({
    nombre: 'Black Domina',
    cantidad: 10,
    color: 'marron',
    raza: 'hibrida indica',
    thc: 16.8,
});

cepa1.describir();
cepa2.describir();
cepa3.describir();
cepa4.describir();

console.log('cepa1', cepa1);
cepa1.vender();
console.log('se vende una', cepa1);
cepa1.vender();
console.log('se vende otra', cepa1);