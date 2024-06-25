//Evento para crear un nuevo viaje
document.getElementById("formulario").addEventListener("submit", crear)

//Función crear
function crear(){
     Aeropuerto=document.getElementById("aeropuerto").value
     strip-start=document.getElementById("start").value
     tipodeviaje=document.getElementById("tipo de viaje").value
     pago=document.getElementById("pago").value
}
let viaje = {
     aeropuerto,
     fecha,
     tipo de viaje,
     pago,
}
if(localStorage.getItem("viajes") === null) {
     let viajes = []
      viajes.push(viaje)
      localStorage.sertItem("viajes", JSON.stringify(viajes))
}
else{
     let viajes = JSON.parse(localStorage.getItem("viajes"))
      viajes.push(viajes)
      localStorage.setItem("viajes", JSON.stringify(viajes))
}
leer ();{
document.getElementById("formulario").reset();
console.log("Viaje guardado correctamente")
e.preventDefault()
}

//Función “leer”

function leer(){
          let viajes = JSON.parse(localStorage.getItem("viajes"));
          document.getElementById("tbody").innerHTML = ""
         for(let i=0; i < viajes.length; i++) {
                      let aeropuerto = viajes[i].aeropuerto
                      let start = viajes[i].start
                      let tipodeviaje = viajes[i].tipodeviaje
                      let pago = viajes[i].pago

                      document.getElementById("tbody").innerHTML +=
                      ´<tr>
                             <td>${aeropuerto}</td>
                             <td>${start}</td>
                             <td>${tipodeviaje}</td>
                             <td>${pago}</td>
                             <td><buttom onclick="editar(´${titulo})" class="btn btn-sucess">Editar</buttom></td>
                       ´</tr> 

          }
}

// Funcion editar
function editar(titulo){
     let viajes = JSON.parse(localStorage.getItem("viajes"));
     for (let i=0; i < viajes.length; i++){
         if(viajes [i].titulo){
          document.getElementById("body").innerHTML=
           
          }
     }
}
leer()
