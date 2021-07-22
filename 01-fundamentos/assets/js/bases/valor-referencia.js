
let a = 10;
let b = a;
a= 30;

//todos los primitivos se pasan por valor y todos los objetos por referencia

console.log({a, b})

let juan = {nombre: 'Juan'};
let ana = { ...juan };  // asignar diferentes datos en memoria
ana.nombre = 'Ana';

console.log(juan, ana);

const cambianombre = ({...persona}) => {
persona.nombre = 'tony';
return persona;
}

let peter = {nombre: 'peter'};
let tony = cambianombre(peter);

console.log({peter, tony});

//ejemplo con arreglos

const frutas = ['manzana', 'pera', 'piña'];

console.time('slice');
// const otrasfrutas = [...frutas];
const otrasfrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');  // medir el rendimiento de la aplicacion
const otrasfrutas2 = [...frutas];
console.timeEnd('spread');


otrasfrutas.push('mango');
console.table({frutas, otrasfrutas});
