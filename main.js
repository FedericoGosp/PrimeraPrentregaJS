
let ingreseSuNombre = prompt("Ingrese su Nombre");

let ingreseSuApellido = prompt("Ingrese su Apellido");

let saludar = "hola, " + (ingreseSuNombre + " " + ingreseSuApellido);

console.log (saludar)

if ((ingreseSuNombre != "") && (ingreseSuApellido !="")){
   
    alert("Usuario, "+ingreseSuNombre + " " + ingreseSuApellido);
}

else { 
    alert ("Error: Ingresar Nombre y Apellido");

}

let respuesta = prompt("Te gusta el Fútbol? ('si' o 'no')");

respuesta = respuesta.toLowerCase();

if (respuesta === "si") {
  alert("Aguante San Lorenzo");
} else {
  alert(" Seguro sos de gimnasia de jujuy");
}

console.log (respuesta)  

let partidos = parseInt(prompt("Cuántos partidos tenemos de diferencia tiene CASLA con GyEjujuy?"));

while (partidos <= 7) {
  alert("Hijos nuestros");
  partidos = parseInt(prompt("Cuántos partidos tenemos de diferencia tiene CASLA con GyEjujuy?"));
}

console.log("Es chiste profe");


