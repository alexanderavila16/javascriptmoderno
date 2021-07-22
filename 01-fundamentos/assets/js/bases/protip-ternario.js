
const elmayor = (a, b) => (a>b) ? a:b;  //funcion de flecha con operador ternario 

const tienemembresia = (miembro) => (miembro) ?  '2dolares ':'10 dolares'; // funcion de flecha miembro, si la persona es miembro entonces(?) le cuesta 2 dolares: si no es miembro le cuesta 10 dolares.

console.log( elmayor(20, 15));
console.log( tienemembresia(false)); //booleano

const amigo =  false;
const amigoArr =  [
 
    'peter',
    'tony',
    'dr strange',
    amigo ? 'thor' : 'loki',   //amigo ? true:false
   // (()=> 'nick fury') ()  //funcion anonima autoinvocada
    elmayor(10,15)


];
console.log(amigoArr);



const nota = 82.5;  // A+ A B+
const grado = nota >= 95 ? 'A+':  //es un if muy simplificado con operador ternario
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C': 'F';

console.log({nota, grado});




