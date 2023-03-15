const querySearch = location.search
const param= new URLSearchParams(querySearch)
const id = param.get("id")


let evento = data.events.find(event =>event._id == id)

const divdetalleTarjeta = document.getElementById('detalleTarjeta')

divdetalleTarjeta.innerHTML = `
<div class="card" style="width: 40rem;">
      <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
      <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
        <p class="card-text">Fecha: ${evento.date}</p>
        <p class="card-text">Lugar: ${evento.place}</p>
        <p class="card-text">Capacidad: ${evento.capacity}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">$${evento.price}</small>
        <a href="./index.html" class="btn">Volver a Home</a>
      </div>
</div>
`

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/


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