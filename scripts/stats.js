async function traerDatos() {

    const data = await fetch("https://mindhub-xj03.onrender.com/api/amazing ").then(datos => datos.json())
      .then(data => { return data })
      return data
  }