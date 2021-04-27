
    var map;
    var posts = null;
    var contenedor=document.getElementById('contenedor')
    var contenedor2=document.getElementById('contenedor2')
    var colombia = document.getElementById('colombia')
    var argentina = document.getElementById('argentina')
    var brazil = document.getElementById('brazil')
    var peru = document.getElementById('peru')
    var chile = document.getElementById('chile')
    var ecuador = document.getElementById('ecuador')
    var velezuela = document.getElementById('venezuela')
    var bolivia = document.getElementById('bolivia')
    var paraguay = document.getElementById('paraguay')
    var uruguay = document.getElementById('uruguay')
    var contenido = document.createElement('p')
    var contenido2 = document.createElement('h4')
    var contenido3 = document.createElement('h3')
    var boton = document.getElementById('boton')


    colombia.addEventListener('click', function initMap() {
      fetch('https://restcountries.eu/rest/v2/capital/bogota')
      .then(info => info.json())
      .then(data => {

      posts = data;
      mostrarDatos(posts)
      tiempo();
      })

      function tiempo() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=bogota&appid=110744fd01ab8d8dc905c75a017f856c')
        .then(tiempo => tiempo.json())
        .then(data =>{

          let tiempomaximo = data.main.temp_max
          let tiempominimo= data.main.temp_min
          let icono = data.weather.icon
          contenido2.innerHTML=
          `
        <p>TIEMPO MINIMO: ${tiempomaximo} °C </p>
        <p>TIEMPO MAXIMO: ${tiempominimo} °C </p>
        <img src="${data.weather.icon}@4x.png"/>
        `
        contenedor.appendChild(contenido2);
        })
      }

      map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: 4.624, lng: -74.063},
        zoom: 8,
      });
      var marker = new google.maps.Marker({
        position: {lat: 4.624, lng: -74.063},
        map: map,
        tittle: 'Museo Nacional De Colombia - Bogota'
      });

    });
    function mostrarDatos(posts) {
      posts.map((post, i) => {
        contenido.innerHTML = `
        <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
        <p>REGION: ${post.subregion}</p>
        <p>PAIS: ${post.name}</p>
        <p>CAPITAL: ${post.capital}</p>
        <p>AREA: ${post.area}</p>
        <p>POBLACION: ${post.population}</p>
        `
        contenedor.appendChild(contenido);
      })
    }

argentina.addEventListener('click', function initMap() {
  fetch('https://restcountries.eu/rest/v2/capital/buenos aires')
  .then(data => data.json())
  .then(data => {
  posts = data;
  mostrarDatos(posts)
  tiempo();
})
function mostrarDatos(posts) {
  posts.map((post, i) => {
    contenido.innerHTML = `
    <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
    <p>REGION: ${post.subregion}</p>
    <p>PAIS: ${post.name}</p>
    <p>CAPITAL: ${post.capital}</p>
    <p>AREA: ${post.area}</p>
    <p>POBLACION: ${post.population}</p>
    `
    contenedor.appendChild(contenido);
  })
}
function tiempo() {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=argentina&appid=110744fd01ab8d8dc905c75a017f856c')
  .then(tiempo => tiempo.json())
  .then(data =>{

    let tiempomaximo = data.main.temp_max
    let tiempominimo= data.main.temp_min
    let icono = data.weather.icon
    contenido2.innerHTML=
    `
  <p>TIEMPO MINIMO: ${tiempomaximo} °C </p>
  <p>TIEMPO MAXIMO: ${tiempominimo} °C </p>
  <img src="${data.weather.icon}@4x.png"/>
  `
  contenedor.appendChild(contenido2);
  })
}
map = new google.maps.Map(document.getElementById('map'),{
  center: {lat: -34.6083, lng: -58.3712},
  zoom: 8,
});
var marker = new google.maps.Marker({
  position: {lat: -34.6083, lng: -58.3712},
  map: map,
  tittle: 'Buenos Aires - Argentina'
});
});
brazil.addEventListener('click', function initMap() {
fetch('https://restcountries.eu/rest/v2/capital/brasil')
  .then(data => data.json())
  .then(data => {
  posts = data;
  mostrarDatos(posts)
  tiempo();
  })
  map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: -22.970, lng: -43.182},
    zoom: 6,
  });
  var marker = new google.maps.Marker({
    position: {lat: -22.970, lng: -43.182},
    map: map,
    tittle: 'Copacabana - Brasil'
  });
});
function mostrarDatos(posts) {
  posts.map((post, i) => {
    contenido.innerHTML = `
    <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
    <p>REGION: ${post.subregion} </p>
    <p>PAIS: ${post.name}  </p>
    <p>CAPITAL: ${post.capital}  </p>
    <p>AREA: ${post.area}  </p>
    <p>POBLACION: ${post.population} Habitantes  </p>
    `
    contenedor.appendChild(contenido);
  })
}
function tiempo() {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=brasil&appid=110744fd01ab8d8dc905c75a017f856c')
  .then(tiempo => tiempo.json())
  .then(data =>{

    let tiempomaximo = data.main.temp_max
    let tiempominimo= data.main.temp_min
    let icono = data.weather.icon
    contenido2.innerHTML=
    `
  <p>TIEMPO MINIMO: ${tiempomaximo} °C </p>
  <p>TIEMPO MAXIMO: ${tiempominimo} °C </p>
  <img src="${data.weather.icon}@4x.png"/>
  `
  contenedor.appendChild(contenido2);
  })
}
peru.addEventListener('click', function initMap() {
  fetch('https://restcountries.eu/rest/v2/capital/lima')
  .then(info => info.json())
  .then(data => {
  posts = data;
  mostrarDatos(posts)
  tiempo();
  })
  map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: -12.0453, lng: -77.0311},
    zoom: 6,
  });
  var marker = new google.maps.Marker({
    position: {lat: -12.0453, lng: -77.0311},
    map: map,
    tittle: 'Lima - Peru'
  });
});
function mostrarDatos(posts) {
  posts.map((post, i) => {
    contenido.innerHTML = `
    <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
    <p>REGION: ${post.subregion} </p>
    <p>PAIS: ${post.name}  </p>
    <p>CAPITAL: ${post.capital}  </p>
    <p>AREA: ${post.area}  </p>
    <p>POBLACION: ${post.population} Habitantes  </p>
    `
    contenedor.appendChild(contenido);
  })
}
function tiempo() {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=lima&appid=110744fd01ab8d8dc905c75a017f856c')
  .then(tiempo => tiempo.json())
  .then(data =>{

    let tiempomaximo = data.main.temp_max
    let tiempominimo= data.main.temp_min
    let icono = data.weather.icon
    contenido2.innerHTML=
    `
  <p>TIEMPO MINIMO: ${tiempomaximo} °C </p>
  <p>TIEMPO MAXIMO: ${tiempominimo} °C </p>
  <img src="${data.weather.icon}@4x.png"/>
  `
  contenedor.appendChild(contenido2);
  })
}
chile.addEventListener('click', function initMap() {
  fetch('https://restcountries.eu/rest/v2/capital/santiago')
        .then(info => info.json())
        .then(data => {
        posts = data;
        mostrarDatos(posts)
        tiempo();
        })
        map = new google.maps.Map(document.getElementById('map'),{
          center: {lat: -35.675147, lng: -71.542969},
          zoom: 6,
        });
        var marker = new google.maps.Marker({
          position: {lat: -35.675147, lng: -71.542969},
          map: map,
          tittle: 'Santiago de Chile - Chile'
        });
      });
      function mostrarDatos(posts) {
        posts.map((post, i) => {
          contenido.innerHTML = `
          <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
          <p>REGION: ${post.subregion} </p>
          <p>PAIS: ${post.name}  </p>
          <p>CAPITAL: ${post.capital}  </p>
          <p>AREA: ${post.area}  </p>
          <p>POBLACION: ${post.population} Habitantes  </p>
          `
          contenedor.appendChild(contenido);
        })
      }
      function tiempo() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=santiago&appid=110744fd01ab8d8dc905c75a017f856c')
        .then(tiempo => tiempo.json())
        .then(data =>{

          let tiempomaximo = data.main.temp_max
          let tiempominimo= data.main.temp_min
          let icono = data.weather.icon
          contenido2.innerHTML=
          `
        <p>TIEMPO MINIMO: ${tiempomaximo} °C </p>
        <p>TIEMPO MAXIMO: ${tiempominimo} °C </p>
        <img src="${data.weather.icon}@4x.png"/>
        `
        contenedor.appendChild(contenido2);
        })
}
ecuador.addEventListener('click', function initMap() {
  fetch('https://restcountries.eu/rest/v2/capital/quito')
        .then(info => info.json())
        .then(data => {
        posts = data;
        mostrarDatos(posts)
        tiempo();
        })
        map = new google.maps.Map(document.getElementById('map'),{
          center: {lat: -0.22985, lng: -78.52495},
          zoom: 6,
        });
        var marker = new google.maps.Marker({
          position: {lat: -0.22985, lng: -78.52495},
          map: map,
          tittle: 'Quito - Ecuador'
        });
      });
      function mostrarDatos(posts) {
        posts.map((post, i) => {
          contenido.innerHTML = `
          <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
          <p>REGION: ${post.subregion} </p>
          <p>PAIS: ${post.name}  </p>
          <p>CAPITAL: ${post.capital}  </p>
          <p>AREA: ${post.area}  </p>
          <p>POBLACION: ${post.population} Habitantes  </p>
          `
          contenedor.appendChild(contenido);
        })
      }
      function tiempo() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=quito&appid=110744fd01ab8d8dc905c75a017f856c')
        .then(tiempo => tiempo.json())
        .then(data =>{

          let tiempomaximo = data.main.temp_max
          let tiempominimo= data.main.temp_min
          let icono = data.weather.icon
          contenido2.innerHTML=
          `
        <p>TIEMPO MINIMO: ${tiempomaximo} °C </p>
        <p>TIEMPO MAXIMO: ${tiempominimo} °C </p>
        <img src="${data.weather.icon}@4x.png"/>
        `
        contenedor.appendChild(contenido2);
        })
}
velezuela.addEventListener('click', function initMap() {
  fetch('https://restcountries.eu/rest/v2/capital/caracas')
        .then(info => info.json())
        .then(data => {
        posts = data;
        mostrarDatos(posts)
        tiempo();
        })
        map = new google.maps.Map(document.getElementById('map'),{
          center: {lat: 6.42375, lng: -66.58973},
          zoom: 6,
        });
        var marker = new google.maps.Marker({
          position: {lat: 6.42375, lng: -66.58973},
          map: map,
          tittle: 'Caracas - Venezuela'
        });
      });
      function mostrarDatos(posts) {
        posts.map((post, i) => {
          contenido.innerHTML = `
          <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
          <p>REGION: ${post.subregion} </p>
          <p>PAIS: ${post.name}  </p>
          <p>CAPITAL: ${post.capital}  </p>
          <p>AREA: ${post.area}  </p>
          <p>POBLACION: ${post.population} Habitantes  </p>
          `
          contenedor.appendChild(contenido);
        })
      }
      function tiempo() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=venezuela&appid=110744fd01ab8d8dc905c75a017f856c')
        .then(tiempo => tiempo.json())
        .then(data =>{

          let tiempomaximo = data.main.temp_max
          let tiempominimo= data.main.temp_min
          let icono = data.weather.icon
          contenido2.innerHTML=
          `
        <p>TIEMPO MINIMO: ${tiempomaximo} °C </p>
        <p>TIEMPO MAXIMO: ${tiempominimo} °C </p>
        <img src="${data.weather.icon}@4x.png"/>
        `
        contenedor.appendChild(contenido2);
        })
}
bolivia.addEventListener('click', function initMap() {
  fetch('https://restcountries.eu/rest/v2/capital/sucre')
        .then(info => info.json())
        .then(data => {
        posts = data;
        mostrarDatos(posts)
        tiempo();
        })
        map = new google.maps.Map(document.getElementById('map'),{
          center: {lat: -19.03332, lng: -65.26274},
          zoom: 6,
        });
        var marker = new google.maps.Marker({
          position: {lat: -19.03332, lng: -65.26274},
          map: map,
          tittle: 'Sucre- Bolivia'
        });
      });
      function mostrarDatos(posts) {
        posts.map((post, i) => {
          contenido.innerHTML = `
          <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
          <p>REGION: ${post.subregion} </p>
          <p>PAIS: ${post.name}  </p>
          <p>CAPITAL: ${post.capital}  </p>
          <p>AREA: ${post.area}  </p>
          <p>POBLACION: ${post.population} Habitantes  </p>
          `
          contenedor.appendChild(contenido);
        })
      }
      function tiempo() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=sucre&appid=110744fd01ab8d8dc905c75a017f856c')
        .then(tiempo => tiempo.json())
        .then(data =>{

          let tiempomaximo = data.main.temp_max
          let tiempominimo= data.main.temp_min
          let icono = data.weather.icon
          contenido2.innerHTML=
          `
        <p>TIEMPO MINIMO: ${tiempomaximo} °C </p>
        <p>TIEMPO MAXIMO: ${tiempominimo} °C </p>
        <img src="${data.weather.icon}@4x.png"/>
        `
        contenedor.appendChild(contenido2);
        })
}
paraguay.addEventListener('click', function initMap() {
  fetch('https://restcountries.eu/rest/v2/capital/asuncion')
        .then(info => info.json())
        .then(data => {
        posts = data;
        mostrarDatos(posts)
        tiempo();
        })
        map = new google.maps.Map(document.getElementById('map'),{
          center: {lat: -25.28646, lng: -57.647},
          zoom: 6,
        });
        var marker = new google.maps.Marker({
          position: {lat: -25.28646, lng: -57.647},
          map: map,
          tittle: 'Asuncion - Paraguay'
        });
      });
      function mostrarDatos(posts) {
        posts.map((post, i) => {
          contenido.innerHTML = `
          <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
          <p>REGION: ${post.subregion} </p>
          <p>PAIS: ${post.name}  </p>
          <p>CAPITAL: ${post.capital}  </p>
          <p>AREA: ${post.area}  </p>
          <p>POBLACION: ${post.population} Habitantes  </p>
          `
          contenedor.appendChild(contenido);
        })
      }
      function tiempo() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=asuncion&appid=110744fd01ab8d8dc905c75a017f856c')
        .then(tiempo => tiempo.json())
        .then(data =>{

          let tiempomaximo = data.main.temp_max
          let tiempominimo= data.main.temp_min
          let icono = data.weather.icon
          contenido2.innerHTML=
          `
        <p>TIEMPO MINIMO: ${tiempomaximo} °C </p>
        <p>TIEMPO MAXIMO: ${tiempominimo} °C </p>
        <img src="${data.weather.icon}@4x.png"/>
        `
        contenedor.appendChild(contenido2);
        })
}
uruguay.addEventListener('click', function initMap() {
  fetch('https://restcountries.eu/rest/v2/capital/montevideo')
        .then(info => info.json())
        .then(data => {
        posts = data;
        mostrarDatos(posts)
        tiempo();
        })
        map = new google.maps.Map(document.getElementById('map'),{
          center: {lat: -34.8833, lng: -56.1667},
          zoom: 6,
        });
        var marker = new google.maps.Marker({
          position: {lat: -34.8833, lng: -56.1667},
          map: map,
          tittle: 'Montevideo - Uruguay'
        });
      });
      function mostrarDatos(posts) {
        posts.map((post, i) => {
          contenido.innerHTML = `
          <img src="${post.flag}" width="100px" class="img-fluid rounded-circle">
          <p>REGION: ${post.subregion} </p>
          <p>PAIS: ${post.name}  </p>
          <p>CAPITAL: ${post.capital}  </p>
          <p>AREA: ${post.area}  </p>
          <p>POBLACION: ${post.population} Habitantes  </p>
          `
          contenedor.appendChild(contenido);
        })
      }
      function tiempo() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=montevideo&appid=110744fd01ab8d8dc905c75a017f856c')
        .then(tiempo => tiempo.json())
        .then(data =>{

          let tiempomaximo = data.main.temp_max
          let tiempominimo= data.main.temp_min
          let icono = data.weather.icon
          contenido2.innerHTML=
          `
        <p>TIEMPO MINIMO: ${tiempomaximo} °C </p>
        <p>TIEMPO MAXIMO: ${tiempominimo} °C </p>
        <img src="${data.weather.icon}@4x.png"/>
        `
        contenedor.appendChild(contenido2);
        })
}
boton.addEventListener('click', function () {
  fetch('https://randomuser.me/api/')
  .then(tiempo => tiempo.json())
  .then(data =>{

    let img = data.results['0'].picture.large
    let nombre= data.results['0'].name

    contenido3.innerHTML=
    `
  <img src="${img}"/>
  <h3>NOMBRE: ${nombre.first}</h3>
  `
  contenedor2.appendChild(contenido3);
  })
})