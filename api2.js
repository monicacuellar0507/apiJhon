
    var posts = null;
    var contenedor=document.getElementById('contenedor')
    var contenido = document.createElement('h3')
    var boton = document.getElementById('boton')

boton.addEventListener('click', function () {
  fetch('https://randomuser.me/api/')
  .then(tiempo => tiempo.json())
  .then(data =>{

    let img = data.results['0'].picture.large
    let nombre= data.results['0'].name
    let apellido= data.results['0'].name
    let correo= data.results['0'].email
    let ciudad= data.results['0'].country

    contenido.innerHTML=
    `
  <img src="${img}"/>
  <h3>NOMBRE: ${nombre.first}</h3>
  <h3>APELLIDO: ${apellido.last}</h3>
  <h3>CORREO: ${correo}</h3>
  <h3>CIUDAD: ${ciudad}</h3>
  `
  contenedor.appendChild(contenido);
  })
})