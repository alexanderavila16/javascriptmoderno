
const heroes = ['batman', 'superman', 'mujer maravilla', 'aquaman'];

console.warn('For tradicional');

for ( let i = 0; i<heroes.length  ; i++ ) {  // for(inicializacion de la variable; la condicion por la cual sea verdadera ; el incrementador)

  console.log(heroes[i]);
}

console.warn('For in');

for (let i in heroes){

console.log(heroes[i]);



}

console.warn('For of');

for (let heroe of heroes){

    console.log(heroe);
    
    }