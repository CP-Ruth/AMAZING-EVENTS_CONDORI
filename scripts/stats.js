async function traerDatos() {

    const data = await fetch("https://mindhub-xj03.onrender.com/api/amazing ").then(datos => datos.json())
        .then(data => { return data })
    return data
}


function eventoConMayorAsistencia(arrayassistance) {

    let asistenciasTodas = arrayassistance.map(evento => evento.assistance)
    let assistanceSet = new Set(asistenciasTodas)
    let asistenciasArr = Array.from(assistanceSet)
    console.log(asistenciasArr)

    asistenciasArr.forEach(elemento =>{
        let mayorAsistencia= " "
        let uno =  asistenciasArr[0]
        if (elemento >= uno){
            
        }
    })

   console.log(asistenciasArr[0])

}

async function iniciar() {
    let data = await traerDatos()
    console.log(data)

    eventoConMayorAsistencia(data.events)
}
iniciar()


/* function tarjetasEventos(xxx) {
    if (xxx.events.length == 0) {
      divElementos.innerHTML = `<p>No hay coincidencias</p>`
      return
    }
    let tarjetas = " "
  
    xxx.events.forEach(evento => {
      var first = new Date(xxx.currentDate);
      var second = new Date(evento.date);
  
      if (second > first) {
        tarjetas += `<div class="col">
  <div class="card h-100">
  <img class="card-img-top" src="${evento.image}" alt="${evento.category}">
  <div class="card-body">
    <h5 class="card-title">${evento.name}</h5>
    <p class="card-text">${evento.description}</p>
  </div>
  <div class="card-footer">
    <small class="text-muted">$${evento.price}</small>
    <a href="./details.html?id=${evento._id}" class="btn">Details</a>
  </div>    
  </div>
  </div>`
      }
    })
    divElementos.innerHTML = tarjetas;*/



/* function checksCategorias(arrcateg) {
   let categoriasTodas = arrcateg.map(evento => evento.category)
   let categoriasSet = new Set(categoriasTodas)
   let categoriasArr = Array.from(categoriasSet)
   console.log(categoriasArr)}

checksCategorias(data.events)*/