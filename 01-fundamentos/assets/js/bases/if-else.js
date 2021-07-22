
let a = 5;

if(a >= 10) { //undefined, null, una asignacion

console.log('A es menor o igual a 10');


}else {
   console.log('A es menor a 10');

}
// console.log('fin del programa');

const hoy = new Date(); //{} new(palabra reservada) date(minuto fecha, actual)

let dia = hoy.getDay(); //0 es domingo, 1: lunes, 2: martes ...
console.log(dia);

if(dia === 0  ){ //para asignasiones es ===

console.log('domingo');

}else if(dia ==1){

    console.log('lunes');



//     if(dia ==1){

//         console.log('lunes');
// }else{
//     console.log('no es lunes ni domingo');
// }


}else if (dia ==2){
    console.log('martes');


}else{
    console.log('no es lunes, martes o domingo');


}

//Sin usar If Else, o Switch, unicamente objetos
dia=5; // 0: domingo, 1: lunes, 2:martes ...
const dialetras= { // crear un if else con objetos
0:'domingo',
1:'lunes',
2:'martes',
3:'miercoles',
4:'jueves',
5:'viernes',
6:'sabado',
}

const dialetras2= ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']; // crear un if else con arreglos



// 0:()=>'domingo - 0',
// 1:()=>'lunes - 1',
// 2:()=>'martes - 2',
// 3:()=>'miercoles - 3',
// 4:()=>'jueves - 4',
// 5:()=>'viernes - 5',
// 6:()=>'sabado - 6',



//dia de la semana
console.log(dialetras2[dia]); // imprimo


// console.log(hoy);

