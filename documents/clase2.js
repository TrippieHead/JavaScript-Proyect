let numero = 6;
if (numero === 6) {
    console.log("Hola 6");
}
console.log("fin del proceso");



let clima = "sol"
if(clima === "lluvia"){
    console.log("Mejor me quedo a jugar a la play");
}else if(clima === "nieve"){
    console.log("Mejor me quedo a jugar a la compu");
}else{
    console.log("Salgo a correr al parque");
}



let pregunta = prompt(("Ingresa tu nombre"));
if(pregunta != " "){
    let mensaje = `Hola ${pregunta}`;
    alert(mensaje);
}



let edad = prompt(("Ingresa tu edad"));
if(edad < 15){
    alert("No puedes entrar");
}else if(edad < 18){
    alert("Puedes entrar con un adulto responsable");
}else{
    alert("Puedes pasar tranquilo");
}



let cantidadSemillas = parseInt(prompt("Ingresa la cantidad de semillas que quieres llevar"));
if(cantidadSemillas <= 15){
    console.log("Envio $500");
}else if(cantidadSemillas <= 50){
    console.log("Envio $250");
}else if(cantidadSemillas <= 100){
    console.log("ENVIO GRATIS");
}else{
    alert("Ingrese un valor valido");
}



let tarea = prompt("Hiciste la tarea?");
let cuarto = prompt("Ordenaste tu cuarto?");

if(tarea.toLowerCase() === "si" && cuarto.toLowerCase() === "si"){
    alert("Puedes salir a jugar");
}else if(tarea.toLowerCase() === "si" && cuarto.toLowerCase() === "no"){
    alert("No puedes salir a jugar hasta acomodar el cuarto");
}else if(tarea.toLowerCase() === "no" && cuarto.toLowerCase() === "si"){
    alert("No puedes salir a jugar hasta hacer la tarea");
}else if(tarea.toLowerCase() === "no" && cuarto.toLowerCase() === "no"){
    alert("No puedes salir a jugar");
}else{
    alert("Ingrese el valor solicitado");
}

