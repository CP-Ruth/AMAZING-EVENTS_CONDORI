// API -------------------------------------------------------------------------------------------------
async function traerDatos() {

  const data = await fetch("https://mindhub-xj03.onrender.com/api/amazing ").then(datos => datos.json())
    .then(data => { return data })
    return data
}

// CHECKBOXS
const divCheckboxs = document.getElementById('checkboxs')

function checksCategorias(arrcateg) {

  let categoriasTodas = arrcateg.map(evento => evento.category)
  let categoriasSet = new Set(categoriasTodas)
  let categoriasArr = Array.from(categoriasSet)
  console.log(categoriasArr)
  let checks = " "
  categoriasArr.forEach(category => {
    checks += `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="${category}" id="${category}">
      <label class="form-check-label" for="${category}"> ${category}</label>
    </div>`
  })
  divCheckboxs.innerHTML = checks
}

// Tarjetas--------------------------------------------------------------------------------------------
const divElementos = document.getElementById('elementos')

function tarjetasEventos(xxx) {
  if (xxx.events.length == 0) {
    divElementos.innerHTML = `<p>No results</p>`
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
  divElementos.innerHTML = tarjetas;
}
//tarjetasEventos(data.events)


// Para los filtros------------------------------------------------------------------------------------
const input = document.querySelector('input')
//input.addEventListener('input', filtroCombinado)
//divCheckboxs.addEventListener('change', filtroCombinado)


// Filtro por search-----------------------------------------------------------------------------------

function filtroSearch(array, text) {
  let arrayFiltrado = array.filter(evento => evento.name.toLowerCase().includes(text.toLowerCase()))
  return arrayFiltrado
}

// Filtro por checkboxes------------------------------------------------------------------------------

function filotroSeleccionChecks(array) {
  let cajitasChecks = document.querySelectorAll("input[type='checkbox']")
  let arrayCajitasCheckeadas = Array.from(cajitasChecks)
  let cajitasCheckeadas = arrayCajitasCheckeadas.filter(check => check.checked)
  let valuesChecks = cajitasCheckeadas.map(checkeado => checkeado.value)

  let arrayFiltrados = array.filter(elemento => valuesChecks.includes(elemento.category))
  if (valuesChecks.length > 0) {
    return arrayFiltrados
  }
  return array
}

// Filtros combinados------------------------------------------------------------------------------

// Filtros combinados------------------------------------------------------------------------------


async function iniciar() {
  let data = await traerDatos()
  console.log(data)
  checksCategorias(data.events)
  tarjetasEventos(data)

  function filtroCombinado() {
    let filtroUno = filtroSearch(data.events, input.value)
    let filtroDos = filotroSeleccionChecks(filtroUno)
    tarjetasEventos(filtroDos)
  }

  input.addEventListener('input', filtroCombinado)
  divCheckboxs.addEventListener('change', filtroCombinado)

}


iniciar()

