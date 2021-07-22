

// patron modulo 

const mimodulo = (() => {   // crearse un nuevo scope no va ser posible llamar aal ojeto directamente
  'use strict'; // que significa use strict, le dice a javascript porfavor se estricto de evaluar mi codigo (modo anonimo)
 
    
  let deck = []; //baraja
  const tipos = ['C','D','H','S'],
         especiales = ['A','J','Q','R'];

  //let puntosjugador = 0,
  //    puntoscomputadora = 0;
  let puntosjugadores = [];

  //Referencias del html
  const btnpedir = document.querySelector('#btnpedir'),
        btndetener = document.querySelector('#btndetener'),
        btnnuevo = document.querySelector('#btnnuevo');

  const divcartasjugadores = document.querySelectorAll('.divcartas'),
       puntoshtml = document.querySelectorAll('small');

// esta funcion inicializa el juego
const inicializarjuego = (numjugadores = 2) => {
  deck = crearDeck();

  puntosjugadores = [];
  for (let i = 0; i < numjugadores; i++){
   puntosjugadores.push(0)

  }

 puntoshtml.forEach(elem => elem.innerText = 0);
 divcartasjugadores.forEach(elem => elem.innerHTML = ' ' );

  btnpedir.disabled = false;
  btndetener.disabled = false;
 
  
 }     
  
  //Esta funcion crea un nuevo deck o baraja
  const crearDeck = () => {
    

    deck = []; // aqui estoy reinicializando el deck
    for (let i=2; i<= 10; i++){ // i=2 porque inicia las cartas en 2; i<= 10 porque las cartas terminan en 10; i++ incrementa.
      for(let tipo of tipos) {
          deck.push(i + tipo);
      }
  }
  for( let tipo of tipos){
  for(let esp of especiales){
  deck.push(esp + tipo);

  }


  }
        
    //console.log(deck);
    
    return _.shuffle(deck); //baraja aleatoria
    

  }

  

  //Esta funcion me permite tomar una carta
  const pedircarta = () => {

    if (deck.length === 0){
    throw 'No hay cartas en el deck'; //mensaje de advertencia


    }
      // console.log(deck);
      // console.log(carta); //carta debe de ser de la baraja
      return deck.pop(); //elimina con pop el ultimo elemento de arreglo y lo regresa
  }

  // for (let i=0; i<=100; i++){ //ementos para agotar las cartas
  // }

  //pedircarta();

  //Esta funcion me asigna los puntos de la carta
  const valorcarta = (carta) => {

  const valor = carta.substring(0, carta.length - 1); //regresa un string cortado y voy a cortar desde la posicion 0 y quiero llegar a carta.lenght -1 el ultimo
  //  let puntos = 0;
   
  return (isNaN(valor)) ?   // evaluame si es un numero y si no es un numero entonces (?) el valor es un AS entonces ? vale 11 en caso contrario vale :10 y si es un numero el valor *1
      (valor ==='A') ? 11:10
      : valor * 1;




  // if(isNaN( valor)) {//isNAN es evaluame lo que esta entre parentesis y evaluame si es un numero o no.

  //     puntos = ( valor=== 'A') ? 11 :10;  //operador ternario si es un A vale 11 en caso contrario vale 10

  // //    console.log('No es un numero');

  // }else{
  //     // console.log('Es un numero');


  //     puntos = valor * 1; // se multiplica por 1 para que el resultado sea un numero y no un string
  // }

  // console.log(puntos );

  }
  // turno: 0= primer jugador y el ultimo sera la computadora
 const acumularpuntos = (carta,turno) => {
    
  puntosjugadores[turno] = puntosjugadores[turno] + valorcarta(carta);
  puntoshtml[turno].innerText = puntosjugadores[turno] ;
  return puntosjugadores[turno] ;

 }

const crearcarta = (carta, turno ) => {

  const imgcarta = document.createElement('img');
  imgcarta.src = `assets/cartas/${carta}.png`; //puedo insertar valores 3H JD 4C, se crea la carta recibe la carta 
  imgcarta.classList.add('carta');
  divcartasjugadores[turno].append( imgcarta);
  //divcartascomputadora.append(imgcarta);

}

const determinarganador = () => {

  const [puntosminimos, puntoscomputadora ] = puntosjugadores;

  setTimeout(() => {
    if(puntoscomputadora === puntosminimos) {
    alert('NADIE GANA');
  
    }else if(puntosminimos >21){
    alert('COMPUTADORA GANA');
  
    }else if(puntoscomputadora > 21){
        alert('JUGADOR GANA');
    }else{
  
    alert('COMPUTADORA GANA');
  
    }
    }, 100 );
  

}


  //turno de la computadora
  const turnocomputadora = (puntosminimos) => {

 let puntoscomputadora = 0;;
    
  do{

  const carta = pedircarta();
  puntoscomputadora = acumularpuntos(carta, puntosjugadores.length - 1);
  crearcarta(carta, puntosjugadores.length - 1)


  //puntoscomputadora = puntoscomputadora + valorcarta(carta);
  //puntoshtml[1].innerText = puntoscomputadora;


  //<img class="carta" src="assets/cartas/2C.png">
  // const imgcarta = document.createElement('img');
  // imgcarta.src = `assets/cartas/${carta}.png`; //puedo insertar valores 3H JD 4C 
  // imgcarta.classList.add('carta');
  // divcartascomputadora.append(imgcarta);

  
  if(puntosminimos >21 ){
      break;
  }


  }while( (puntoscomputadora < puntosminimos) && (puntosminimos <= 21));

   determinarganador();
  }



  // const valor  = valorcarta( pedircarta());
  // console.log({valor});



  //EVENTOS

  btnpedir.addEventListener('click', () => { //una funcion que se envia como argumento

  const carta = pedircarta();
  const puntosjugador= acumularpuntos(carta, 0);

  crearcarta(carta, 0);

  //<img class="carta" src="assets/cartas/2C.png">
  
  if(puntosjugador > 21){


  console.warn('Lo siente PERDISTE');
  btnpedir.disabled = true;
  btndetener.disabled = true;
  turnocomputadora(puntosjugador);

  }else if(puntosjugador === 21){
  console.warn('21 GANASTE')
  btndetener.disabled = true;
  btnpedir.disabled = true;
  }


  }); 

  btndetener.addEventListener('click', () => {

    btnpedir.disabled = true;
    btndetener.disabled = true;


  turnocomputadora(puntosjugadores [0]);


  });

  // boton nuevo juego
  // btnnuevo.addEventListener('click', () => {

  // inicializarjuego();
  
  

  // });

return {  //de aqui  para abajo mi codigo es publico
  nuevojuego: inicializarjuego
};


})();



/**
 * 2C = Two of Clubs (treboles)
 * 2D = Two of Diamons (treboles)
 * 2H = Two of Hearts (treboles)
 * 2S = Two of Spades (treboles)
 * 
 * 
 */





// //TODO: Borrar
// console.log(16);
// turnocomputadora(16);







