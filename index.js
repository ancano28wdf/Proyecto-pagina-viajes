//Evento para crear un nuevo viaje
document.getElementById(“formulario”).addEventListener(“submit, crear)

//Función crear
function crear(){
     Aeropuerto = document.getElementById(“aeropuerto”).value
     strip-start = document.getElementById(“start”).value
     tipo de viaje = document.getElementById(“tipo de viaje”).value
     pago = document.getElementById(“pago”).value
}
let viaje = {
     aeropuesrto,
     fecha,
     tipo de viaje,
     pago
}
if(localStoreg.getItem(“viajes”) === null) {
     let viajes = []
      viajes.push(viaje)
      localStoreg.insertItem(“viajes”, JSON.stringify(viajes))
else{
     let viajes = JSON.parse(localStorage.getItem("viajes"))
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
                      let aeropuesrto = viajes[i].nombre
                      let fecha = viajes[i].destino
                      let tipo de viaje = viajes[i].no. personas
                      let tarjeta = viajes[i].tarjeta

                      document.getElementById(“tbody”).innerHTML +=
                      ‘<tr>
                             <td>${aeropuesrto}</td>
                             <td>${fecha}</td>
                             <td>${tipo de viaje}</td>
                             <td>${tarjeta}</td>
´
}