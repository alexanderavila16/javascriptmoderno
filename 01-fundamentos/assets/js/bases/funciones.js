function saludar ( nombre ){   //funciones basicas

// console.log(arguments);
// console.log('hola '+ nombre);
return [1,2];

//esto nunca se va a ejecutar
console.log('soy un codigo despues del return');
}

const saludar2 = function (nombre){   // funciones con una varuable

    console.log('hola ' + nombre);
     }

const saludarflecha = () => {   // funciones de flecha anonima
 console.log('hola flecha');
}

const saludarflecha2 = (nombre) => { // funciones de flecha anonima
    console.log('hola'+ nombre);
   }

const retornodesaludar = saludar('fernando', 40 , true, 'costa rica');

console.log(retornodesaludar[0], retornodesaludar[0]);

saludar2('fernando');

saludarflecha();  // imprimo
saludarflecha2('melissa'); // imprimo

function sumar(a, b){

return a + b;

}

// const sumar2 = (a,b) => {
//     return a + b ;

// }
const sumar2 = (a,b) => a + b; // funciones de flecha

const sumar3 = (d,c) => d+c;



function getAleatorio() {

 return Math.random();

}

// en una funcion de flecha que no tenga llaves {}
//getaleatorio2

const getaleatorio2 = () => Math.random(); // funciones de flecha


console.log( getAleatorio());

console.log( sumar2(1,2));