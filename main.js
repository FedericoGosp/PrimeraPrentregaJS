
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


let opcion;


let promedios = "1 - Riber 2.000 .\n 2 - Boca 1.754 \n 3 - San Lorenzo 1.433";

const mostrarPromedios = () => {
    let mensajeInicial = "Estos son los promedios: ";
    let mensajeFinal = mensajeInicial + "\n\n" + promedios;
    alert(mensajeFinal);
};


do {
    opcion = parseInt(prompt(
      "Menú de Opciones:\n\n 1. - San Lorenzo\n  2. - Boca Juniors\n  3. - River Plate\n  0. Salir"
    ));
  
    switch (opcion) {
      case 0:
        alert("Muchas gracias por jugar");
        break;
      case 1:
        alert("La hinchada mas fiel y hermosa");
        break;
      case 2:
        alert("Necesitan parlantes para alentar");
        break;
      case 3:
        alert("le tiraron maiz a sus jugadores");
        mostrarPromedios();
        break;
      default:
        alert("Opción NO VÁLIDA. Por favor, seleccione una opción válida.");
        break;
    }
  } while (opcion !== 0);


 do {
    opcion = parseInt(prompt(
        "Tabla hsitorica :\n\n 1. - Riber Plate \n  2. - Boca Juniors\n  3. - San Lorenzo \n  0. Salir"
        ));

    switch (opcion) {
        case 1:
            alert("Riber 5584");
            break;
        case 2:
            alert("Boca 5379");
            break;
        case 3:
            alert("El tercer Grande pero mejor equipo San San San Lorenzo 4914");
            break;
        default:
            alert("Perdon soy de San Lorenzo");
            break;
    };
} while (opcion !== 0);
