async function traerDatos() {

  const data = await fetch("https://mindhub-xj03.onrender.com/api/amazing ").then(datos => datos.json())
    .then(data => { return data })
  return data
}
// Elementos de la tabla--------------------------------------------------------------------------------

const tdDatosUnoA = document.getElementById('tabla_1a')
const tdDatosUnoB = document.getElementById('tabla_1b')
const tdDatosUnoC = document.getElementById('tabla_1c')

function tablaUno(arrayWithAssistance) {

  let assistanceDatos = arrayWithAssistance.filter(evento => evento.assistance)
  let arrayNombres = []
  let arrayPorcentajes = []
  let arrayCapacidad = []
  assistanceDatos.forEach(element => {
    let eventoCapacidad = element.capacity
    let eventoAsistencia = element.assistance
    let porsentaje = eventoAsistencia * 100 / eventoCapacidad;
    //console.log(porsentaje)
    arrayPorcentajes.push(porsentaje)
    arrayNombres.push(element.name)
    arrayCapacidad.push(element.capacity)
  })


  let maxPorcentaje = Math.max(...arrayPorcentajes)
  let minPorcentaje = Math.min(...arrayPorcentajes)
  let maxCapacidad = Math.max(...arrayCapacidad)

  tdDatosUnoA.innerHTML = `${arrayNombres[arrayPorcentajes.indexOf(maxPorcentaje)]} (${maxPorcentaje}%)`
  tdDatosUnoB.innerHTML = `${arrayNombres[arrayPorcentajes.indexOf(minPorcentaje)]} (${minPorcentaje}%)`
  tdDatosUnoC.innerHTML = `${arrayNombres[arrayCapacidad.indexOf(maxCapacidad)]} (${maxCapacidad})`

}
//******************************************************************************** */
const datosTablaDos = document.getElementById('tablaDos')
const datosTablaTres = document.getElementById('tablaTres')

function tipoDeTabla(arrcateg, fecha, tabla) {

  let upEvent = []
  let pastEvent = []
  arrcateg.forEach(elemento => {
    if (new Date(elemento.date) > fecha) {
      upEvent.push(elemento)
    } else {
      pastEvent.push(elemento)
    }
  })
  console.log(upEvent)
  //console.log(pastEvent)
  if (tabla == 'tablaDos') {

    let categoriasSet = new Set(upEvent.map(evento => evento.category)); console.log(categoriasSet)

    let columnasDeLaFila = ''
    categoriasSet.forEach(element => {
      let soloUnaCategoria = upEvent.filter(elemento => elemento.category == element)
      console.log(soloUnaCategoria)

      let sumCap = 0
      let sumaPrice = 0
      let estimate = 0

      soloUnaCategoria.forEach(element => {
        sumCap += element.capacity
        sumaPrice += element.price
        estimate += element.estimate
      })
      let porcEstimate = estimate * 100 / sumCap;

      console.log('promEstimate es:', porcEstimate)
      console.log('la suma es:', sumCap)
      console.log('sumaPrice es:', sumaPrice)
      console.log('estimate es:', estimate)

      columnasDeLaFila += `
    <tr>
      <td>${element}</td>
      <td>$${sumaPrice}</td>
      <td>${porcEstimate}%</td>
    </tr>`

      datosTablaDos.innerHTML = columnasDeLaFila;

      //console.log('promEstimate es:', porcEstimate)
    })

  }
  if (tabla == 'tablaTres') {
    let categoriasSet = new Set(pastEvent.map(evento => evento.category)); console.log(categoriasSet)

    let columnasDeLaFila = ''
    categoriasSet.forEach(element => {
      let soloUnaCategoria = pastEvent.filter(elemento => elemento.category == element)
      console.log(soloUnaCategoria)

      let sumCap = 0
      let sumaPrice = 0
      let assistance = 0

      soloUnaCategoria.forEach(element => {
        sumCap += element.capacity
        sumaPrice += element.price
        assistance += element.assistance
      })
      let porcAssistance = assistance * 100 / sumCap;

      console.log('promEstimate es:', porcAssistance)
      console.log('la suma es:', sumCap)
      console.log('sumaPrice es:', sumaPrice)


      columnasDeLaFila += `
    <tr>
      <td>${element}</td>
      <td>$${sumaPrice}</td>
      <td>${porcAssistance}%</td>
    </tr>`

      datosTablaTres.innerHTML = columnasDeLaFila;

      //console.log('promEstimate es:', porcEstimate)
    })

  }

}



//******************************************************************************** */


async function iniciar() {
  let data = await traerDatos()
  console.log(data.events)
  tablaUno(data.events)
  var first = new Date(data.currentDate);
  console.log(first)
  let tablaDos = 'tablaDos'
  tipoDeTabla(data.events, first, tablaDos)
  let tablaTres = 'tablaTres'
  tipoDeTabla(data.events, first, tablaTres)
}
iniciar()




/* function checksCategorias(arrcateg) {
   let categoriasTodas = arrcateg.map(evento => evento.category)
   let categoriasSet = new Set(categoriasTodas)
   let categoriasArr = Array.from(categoriasSet)
   console.log(categoriasArr)}

checksCategorias(data.events)*/