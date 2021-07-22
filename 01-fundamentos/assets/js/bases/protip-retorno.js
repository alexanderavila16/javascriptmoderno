// function crearpersona ( nombre, apellido){

// return{   //podemos retornar nombre yy apellido sii las variables se llaman iguales
//   nombre,
//   apellido
// }
// }

const crearpersona = ( nombre, apellido) => 
({nombre,apellido}); // colocar entre parentesis nombre y apellido nos da el mismo resultado
    


const persona = crearpersona ('alexander', 'avila');
console.log(persona);

function imprimeargumentos() {

console.log( arguments );

}

const imprimeargumentos2 = ( edad, ...arguments ) => { // con ..arguments es un parametro rest creando un arreglo con todos los valores
                                                 // no puede ir otro vlor despues de argumentos y si coloco en la primera solo toma el primer valor y los otros como arreglo
    // console.log(arguments);
    return arguments;

}


const [ casado, vivo, nombre, saludo] = imprimeargumentos2(10, true, false, 'alex', 'hola');
console.log({casado, vivo, nombre, saludo});  // cuando coloco llaves es porque quiero ver este par de objetos mas facil

// console.log(argumentos[0], argumentos[1]);

const {apellido: nuevoapellido} = crearpersona ('alexander', 'avila');  //renombrar una variable apellido:nuevoapllido
console.log({nuevoapellido});


const tony ={
    nombre: 'tony stark',
    codeName: 'ironman',
    vivo: false,
    edad: 40,
    trajes: ['mark 1','mark v', 'hulkbluster' ],
    
 };
 
//  const imprimepropiedades = (personaje) => {

//     console.log('nombre',personaje.nombre);
//     console.log('codename',personaje.codeName);
//     console.log('edad',personaje.edad);
//     console.log('vivo',personaje.vivo);
//     console.log('trajes',personaje.trajes);
// }

// prop tip
const imprimepropiedades = ({nombre, codeName, vivo, edad=15, trajes }) => {

console.log({nombre});
console.log({codeName});
console.log({vivo});
console.log({edad});
console.log({trajes});

}

imprimepropiedades( tony );