const querySearch = location.search
const param = new URLSearchParams(querySearch)
const id = param.get("id")

//---------------------------------------------------------------------------------------------
async function traerDatos() {

  const data = await fetch("https://mindhub-xj03.onrender.com/api/amazing ").then(datos => datos.json())
    .then(data => { return data })
  return data
}

const divdetalleTarjeta = document.getElementById('detalleTarjeta')

async function iniciar() {
  let data = await traerDatos()
  let evento = data.events.find(event => event._id == id)


  divdetalleTarjeta.innerHTML = `
<div class="row row-cols-1 row-cols-md-3 g-4" id="elementos">
  <div class="col">
    <div class="card h-100">
      <img class="card-img-top" src="${evento.image}" alt="${evento.category}">
      <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
        <p class="card-text">FECHA: ${evento.date}</p>
        <p class="card-text">LUGAR: ${evento.place}</p>
        <p class="card-text">CAPACIDAD: ${evento.capacity}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">$${evento.price}</small>
        <a href="./index.html" class="btn">Volver a Home</a>
      </div>   
  </div>
  </div>

</div>
`
}


iniciar()






/*
 _id: 1,
      "image":"https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      "name":"Collectivities Party",
      "date":"2021-12-12",
      "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      "category":"Food Fair",
      "place":"Room A",
      "capacity":45000,
      "assistance":42756,
      "price":5 */

/*
<div class="card mb-3">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
</div>
*/ 