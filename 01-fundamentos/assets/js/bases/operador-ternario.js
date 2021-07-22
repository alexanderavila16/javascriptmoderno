/** 
 * dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */
// Entra a un sitio web, para consultar si estara abierto hoy...

const dia = 1; //0:domingo ... 1:lunes....
const horaacctual =10;


let horaapertura;
let mensaje; //estara abierto, estara cerrado, hoy abrimos a las xx

// if(dia ===0 || dia === 6){
//  if([0,6].includes(dia))   {
//  console.log('finde semana');
//  horaapertura = 9;


// }else{
//     console.log('dia de semana');
//     horaapertura = 11;
// }

// [0,6] includes si eso existe dentro de ese arreglo el dia actual
// si esa condicion se cumple es un true pongo el signo pongo el vlor que quiero retornar 
// ? se cumple, abrimos a las 9: caso contrario seria un 11
horaapertura = ([0,6].includes(dia)) ? 9:11; //operacion ternaria este






if(horaacctual >= horaapertura){
 mensaje= 'esta abierto';

}else{
mensaje = `esta cerrado, hoy abrimos a las ${horaapertura} `;

}

mensaje = ( horaacctual >= horaapertura) ? 'esta abierto':`esta cerrado, hoy abrimos a las ${horaapertura}`; //operacion ternaria con concatenar ${} 


console.log({horaapertura, mensaje});