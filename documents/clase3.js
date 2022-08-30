//iteramos el string "Iteracion" partiendo desde el numero 0 hasta el 9 (porque tiene que ser menor a 10).
//i++ es igual a i = i + 1 (esto se puede cambiar por el numero que querramos).

for(let i = 0; i >= -15; i--){
    console.log(i);
}



let numero = parseInt(prompt("Ingrese un numero"));
for(let i = 0; i < 50; i = i + 3){
    let resultado = numero + i;
    console.log("este es el resultado del numero ingresado por el valor de i", resultado, "y este el numero de iteracion", i);
}



let number = parseInt(prompt("Ingrese un numerito"));
for(let i = 100; i < 50; i++){
    let operacion = number * i;
    let resultado = `${number} * ${i} = ${operacion}`;
    console.log(resultado);
}



for(let i = 0; i <= 15; i++){
    let nombre = prompt("Ingrese su nombre"); //aqui prompt esta por dentro de for, osea que tambien se repite
    let turno = `Su turno es el #${i} ${nombre}`;
    alert(turno);
}



for(let i = 1; i <= 10; i++){
    if(i === 7){
        break;
    }
    console.log(i);
}
console.log("aplicamos break");



for(let i = 1; i <= 18; i++){
    if(i === 7 || i === 14){
        continue;
    }
    console.log(i);
}
console.log("aplicamos continue");



//simulamos un inicio de sesion usando while para preguntar eternamente hasta ingresar la informacion correcta
let usuario = prompt("Ingrese su usuario");

while(usuario != "facundo"){
    alert("Usuario incorrecto. Ingrese el usuario nuevamente");
    usuario = prompt("Ingrese su usuario");
}

alert("Bienvenido!");



let numero1 = 0;
do{
    numero = prompt("ingresar numero");
    console.log(numero1);

}while(parseInt(numero1));



//estructura switch
let moneda = "libra ";

switch(moneda){
    case "ars":
        console.log("esta cagada es argentina");
        break;
    
    case "cop":
        console.log("es colombiana");  
        break;
       
    case "usd":
        console.log("es yanki");   
        break;
       
    default:
        console.log("moneda no reconocida");    
}