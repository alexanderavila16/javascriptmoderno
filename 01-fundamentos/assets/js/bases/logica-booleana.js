const regresatrue = () => {  
console.log('regresa true');
return(true);

}

const regresafalse = () => {  
    console.log('regresa false');
    return(false);
    
    }
console.warn('not o la negacion');
console.log(true); // true
console.log(!true); //falso
console.log(!regresafalse());//true con una funcion

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && !false); //true

console.log('=====');
console.log(regresafalse() && regresatrue()); //false
console.log(regresatrue() && regresafalse()); //false


console.log('== && ===');
regresatrue() && regresafalse();

console.log('4 condiciones',true && true && true && false); // false

console.warn('OR'); //siempre va regresar true

console.log(true || false); //true
console.log(false || false); //false

console.log( regresatrue() || regresafalse()); //true
console.log('4 condiciones',true || true || true || false); // true

console.warn('Asignaciones');

const soyundefined = undefined;
const soynull = null;
const soyfalso = false;

const a1 = true && 'hola mundo' && 150; // se le asigna el ultimo valor 
const a2 = 'hola' && 'mundo' && soyfalso && true ;
const a3 = soyfalso || 'ya no soy falso';
const a4 = soyfalso ||  soyundefined || soynull || 'ya no soy falso' || true;
const a5 = soyfalso ||  soyundefined || regresatrue() || 'ya no soy falso' || true;


console.log({a1, a2, a3, a4, a5});

if (regresafalse() && regresatrue() && (true || fale || true) ){
  console.log('hacer algo');

}else{
    console.log('hacer otra cosa');



}

