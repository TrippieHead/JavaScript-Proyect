//eventos

function saludar(nombre) {
    console.log('HOLA SOY EL BOTON ' + nombre);
}

let boton = document.getElementById('btnPrincipal');
boton.addEventListener('click', saludar);

//otra forma de hacer lo mismo es con otro metodo, pero es menos dinamico

boton.onclick = () => {console.log('RESPUESTA 2')};

//podemos agregarle una arrow function si necesitamos parametros en la funcion que acompana al evento

let nombre = prompt('Ingrese su nombre');
boton.addEventListener('click', () => saludar(nombre));

