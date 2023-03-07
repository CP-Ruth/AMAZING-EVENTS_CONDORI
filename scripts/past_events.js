const divElementos = document.getElementById('elementos')

let tarjetas = " "

for (evento of data.events) {

    var first = new Date(data.currentDate);
    var second = new Date(evento.date);

    if (second < first) {
        tarjetas += `<div class="col">
    <div class="card h-100">
      <img class="card-img-top" src="${evento.image}" alt="${evento.category}">
      <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">$${evento.price}</small>
        <a href="#" class="btn">Details</a>
      </div>    
  </div>
  </div>`
    }
}
divElementos.innerHTML = tarjetas;