// CHECKBOXS


function unoDelGrupo(item) {
  return [item.category].join(" ");
}
let categoriasTodas = data.events.map(unoDelGrupo)
let categoriasArr= new Set(categoriasTodas)
let categorias =[...categoriasArr]
console.log(categorias)

let divCheckboxs= document.getElementById('checkboxs')
let checks = " "

function checksCategorias(categ){
  checks += `
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="${categ}" id="${categ}">
    <label class="form-check-label" for="${categ}"> ${categ}</label>
</div>`
 return divCheckboxs.innerHTML= checks;
}

categorias.forEach(checksCategorias)


//Tarjetas--------------------------------------------------------------------------------------------

let divElementos = document.getElementById('elementos')
let tarjetas = " "

function tarjetasEventos(evento) {

  tarjetas += `<div class="col">
  <div class="card h-100">
    <img class="card-img-top" src="${evento.image}" alt="${evento.category}">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">${evento.description}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">$${evento.price}</small>
      <a href="./details.html" class="btn">Details</a>
    </div>    
</div>
</div>`
  return divElementos.innerHTML = tarjetas;
}
data.events.forEach(tarjetasEventos)




