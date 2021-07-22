const personaje ={
   nombre: 'tony stark',
   codeName: 'ironman',
   vivo: false,
   edad: 40,
   coords: {
       lat: 34.034,
       lng: -118.70
   },
   trajes: ['mark 1','mark v', 'hulkbluster' ],
   direccion: {
      zip: '1090, 9026',
      ubicacion: 'malibu, california'
     
   },
   'ultima_pelicula': 'infinity war'


};

console.log(personaje);
console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('edad', personaje.edad);

console.log('coors', personaje.coords);  //impimir variable de personajes la variable coords
console.log('lat', personaje.coords.lat); // impimir variable de personajes la variable coords dentro la lat

console.log('numero de trajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[personaje.trajes.length-1]); // traer el ultimo traje

const x = 'vivo';
console.log('vivo', personaje[x] );

console.log('ultima pelicula', personaje['ultima_pelicula']);

// Mas detalles

delete personaje.edad; //eliminamos algun elemento de las variables(edad)
console.log(personaje);

personaje.casado = true;  //agregar casado a los elementos



const entriespares = Object.entries(personaje); // recorrer las variables y obtener sus valores
console.log(entriespares);

// personaje=123;
console.log(personaje);

Object.freeze( personaje);

personaje.dinero = 100000;
personaje.casado = false;
personaje.direccion.ubicacion = 'costa rica'
console.log(personaje);

const propiedades = Object.getOwnPropertyNames( personaje); // obtener el nombre de las propiedades
const valores = Object.values (personaje); // obtener los valores de las propiedades


console.log({propiedades, valores});