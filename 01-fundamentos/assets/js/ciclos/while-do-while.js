

const carros = ['ford ', 'mazda', 'honda', 'toyota'];

let i = 0;


// while( i < carros.length){

//     console.log( carros[i]);

// //i = i + 1;
// i ++;
// }

console.warn('while');

// undefined
// null
//false

while(  carros[i]){
 if(i === 1){

   // break;
   i++;
   continue; // nunca va termnar de ejectarse con continue un ciclo infinito
 }
    console.log( carros[i]);

//i = i + 1;
i++;
}


console.warn('Do while');
let j=0;

// va ejecutar el bloque 1 vez 
do {
console.log(carros[j]);

j++;
}while( carros[j]);

{



}