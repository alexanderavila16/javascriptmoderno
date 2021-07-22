let juegos = ['zelda', 'mario', 'metroid', 'crono']; // arreglo de coleccion de juegos
console.log('Largo:', juegos.length);


let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1]; // con juegos.lengt-1 obtenes la pocision del ultimo elemento

console.log({primero,ultimo});

juegos.forEach( (elemento, indice, arr ) => {
 console.log({elemento, indice, arr});

} )

let nuevalongitud = juegos.push( 'f-zerol'); //colocar un elemento en la ultima pocision

console.log({nuevalongitud, juegos});

nuevalongitud = juegos.unshift('fire embl'); //colocar un elemento en la primera pocision
console.log({nuevalongitud, juegos});

let juegoborrado = juegos.pop(); // borrar el ultimo elemento de la pocision del arreglo
console.log({juegoborrado, juegos});

let pos = 1;

console.log(juegos);
let juegosborrados= juegos.splice(pos, 2); //borra  los juegos  desde la pocision 2
console.log({juegosborrados, juegos});

let metroidindex = juegos.indexOf('metroid'); //caseSensitive(),  miro el indice de la pocision
console.log({metroidindex});






