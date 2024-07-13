//Evento para crear un nuevo viaje
document.getElementById("formulario").addEventListener("submit", crear);

//Función crear
function crear(e){
     aeropuerto=document.getElementById("aeropuerto").value
     start=document.getElementById("start").value
     tipo de viaje=document.getElementById("tipo de viaje").value
     pago=document.getElementById("pago").value

let viaje = {
     aeropuerto,
     start,
     tipo de viaje,
     pago
}
if(localStorage.getItem("viajes") === null) {
     let viajes = []
      viajes.push(viaje)
      localStorage.sertItem("viajes", JSON.stringify(viajes))
}else{
     let viajes = JSON.parse(localStorage.getItem("viajes"))
      viajes.push(viaje)
      localStorage.setItem("viajes", JSON.stringify(viajes))
}
leer ();
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
                      let tipo de viaje = viajes[i].tipo de viaje
                      let pago = viajes[i].pago

                      document.getElementById("tbody").innerHTML +=
                      `<tr>
                             <td>${aeropuerto}</td>
                             <td>${start}</td>
                             <td>${tipo de viaje}</td>
                             <td>${pago}</td>
                             <td><buttom onclick="editar(`$(titulo)`)" class="btn btn-sucess">Editar</buttom></td>
                       </tr>
                     `
          }
}

// Funcion editar
function editar(titulo){
     let viajes = JSON.parse(localStorage.getItem("viajes"));
     for (let i=0; i <viajes.length; i++){
         if(viajes[i].titulo === titulo){
           document.getElementById("body").innerHTML = `               
                         <section class="form_container"> 
                            <form class="form">
                            <input  type="text"  class="form_imput" name="Aeropueto"  id="newaeropueto" required autocomplete="off" placeholder="${viajes[i].aeropuerto}">

                            <label for="start"></label>
                            <input type="date" id="newstart" name="trip-start" value="2024-06-29" min="2024-01-01" max="2025-12-31">

                            <label for="tipo deviaje">
                               <span>Elije nuevo Tipo de viaje:</span>
                            </label>
                            <select id="newtipo de viaje" name="tipo de viaje">
                                <option value="combinado">Combinado</option>
                                <option value="individual">Individual</option>
                            </select>

                            <label for="pago">
                               <span>Pago:</span>
                            </label>
                            <select id="newpago" name="pago">
                                 <option value="visa">VISA</option>
                                 <option value="mc">Master Card</option>
                                 <option value="amex">American Express</option>
                            </select>
                            <buttom class="btn btn-success" onclick="Actualizar(`$(i)`">Actualizar</buttom>
                            <buttom class="btn btn-primary" onclick="VistaPrincipal()">Cancelar</buttom>
                            </form>
                         </section>
                         
                          `
     }
          }
}

//Funcion Actualizar
function actualizar(i) {
     let viajes = JSON.parse(localStorage.getItem("viajes"));
     viajes[i].aeropuerto = document.getElementById("newaeropuerto").value;
     viajes[i].start = document.getElementById("newstart").value;
     viajes[i].tipo de viaje = document.getElementById("newtipo de viaje").value;
     viajes[i].pago = document.getElementById("newpago").value;

          localStorage.setItem("viajes", JSON.stringify(viajes));
          vistaPrincipal()
}

//Funcion eliminar
function eliminar(titulo) {
     let viajes = JSON.parse(localStorage.getItem("viajes"));
     for(let i=0; i<viajes.length; i++){
          if(viajes[i].titulo === titulo){
               viajes.splice(i,1);
     }
}
localStorage.setItem("viajes", JSON.stringify(viajes));
leer();
         }

//Funcion para mostrar la interfaz principal 
function vistaPrincipal() {
     document.getElementById("body").innerHTML = `      
     <form id="formulario" class="body">
     <section class="form_container"> 
      <form class="form">
        <input  type="text"  class="form_imput" name="Aeropueto"  id="aeropueto" required autocomplete="off" placeholder="Aeropuerto">
       
        <label for="start"></label>
        <input type="date" id="start" name="trip-start" value="2024-06-29" min="2024-01-01" max="2025-12-31">

        <label for="tipo deviaje">
          <span>Tipo de viaje:</span>
        </label>
        <select id="tipo de viaje" name="tipo de viaje">
         <option value="combinado">Combinado</option>
         <option value="individual">Individual</option>
        </select>

        <label for="pago">
          <span>Pago:</span>
        </label>
        <select id="pago" name="pago">
          <option value="visa">VISA</option>
          <option value="mc">Master Card</option>
          <option value="amex">American Express</option>
        </select>
  
        <input type="submit" class="botton" value="Reservar">
      </form>
     </section>
     </form> 
    </div>
 <div class="col-md-6">
     <table class="table">
        <thread>
          <tr class="col">
            <th scope="col">Aeropuerto</th>
            <th scope="col">Fecha de viaje</th>
            <th scope="col">Viaje</th>
            <th scope="col">Pago</th>
         </tr>
      </thread>
      <tbody id="tbody">
         <tr>
             <td>-</td>
             <td>-</td>
             <td>-</td>
             <td>-</td>
         </tr>
      </tbody>
     </table>  
 </div> `
leer ()
}

leer();
