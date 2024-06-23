const miInput = document.querySelector('input');

// Quita la validación mientras escribes
miInput.addEventListener('input', () => {
    // Quita el mensaje según escribes
    miInput.setCustomValidity('');
    // Comprueba si debe validarlo
    miInput.checkValidity();
});

// Muestra el mensaje de validación
miInput.addEventListener('invalid', () => {
    miInput.setCustomValidity('Escribe tu nombre');
});

const miInput = document.querySelector('input');

// Quita la validación mientras escribes
miInput.addEventListener('input', () => {
    // Quita el mensaje según escribes
    miInput.setCustomValidity('');
    // Comprueba si debe validarlo
    miInput.checkValidity();
});

// Muestra el mensaje de validación
miInput.addEventListener('invalid', () => {
    miInput.setCustomValidity('Me parece que esto no es un E-mail');
});

const miInput = document.querySelector('input');

// Quita la validación mientras escribes
miInput.addEventListener('input', () => {
    // Quita el mensaje según escribes
    miInput.setCustomValidity('');
    // Comprueba si debe validarlo
    miInput.checkValidity();
});

// Muestra el mensaje de validación
miInput.addEventListener('invalid', () => {
    miInput.setCustomValidity('Si no aceptas no puedes continuar');
});

//Evento para crear un nuevo viaje
document.getElementById(“formulario”).addEventListener(“submit, crear)

//Función crear
function crear(e){
     name = document.getElementById(“name”).value
     country = document.getElementById(“country”).value
     number = document.getElementById(“number”).value
     tipo de pago = document.getElementById(“tipo de pago”).value
let viaje = {
     name,
     country,
     number,
     tipo de pago
}
if(localStoreg.getItem(“viajes”) === null) {
     let viajes = []
    viajes.push(viaje)
    localStoreg.insertItem(“viajes”, JSON.stringify(viajes))
else{
let viajes = JSON.parse(localStorage.getItem(“viajes”))
viajes.push(viajes)
localStoreg.setItem(“viajes”, JSON.stringify(viajes))
}
document.getElementById(“formulario”).reset();
console.log(“Viaje gusrdado correctamente”)
e.preventDefault()
}

//Función “leer”

function leer(){
          let viajes = JSON.parse(localStoreg.getItem(“viajes”));
          document.getElementById(“tbody”).innerHTML = “”
         for(let i=0; i < viajes.length; i++) {
                      let nombre = viajes[i].nombre
                      let destino = viajes[i].destino
                      let no. personas = viajes[i].no. personas
                      let tarjeta = viajes[i].tarjeta

                      document.getElementById(“tbody”).innerHTML +=
                      ‘<tr>
                             <td>${nombre}</td>
                             <td>${destino}</td>
                             <td>${no. personas}</td>
                             <td>${tarjeta}</td>
´
}