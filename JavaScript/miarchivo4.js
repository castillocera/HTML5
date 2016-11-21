/*
//alerta
window.alert('Probando ventanita');
window.alert('Probando ventanita numero 2');
document.write('Bienvenidos');


//para insertar datos
window.prompt('introduce algo:', 'Mete un texto');

*/
/*
var texto;
texto =  window.prompt('introduce algo:', 'Mete un texto');
document.write('tu metiste' +texto);
*/


//Usaremos el NaN y el parseInt
//lo que hacen es convertir el string en numero
/*
var x,y;
x = '10';
y = '8';
if (isNaN(x) || isNaN(y)) {
    document.write('Los elementos no se pueden operar aritmeticamente');
}else {
    document.write('Los elementos  se pueden operar aritmeticamente' + (x * y));
}
*/
//parseInt
var x,y;
x = '10';
y = '8';
if (isNaN(x) || isNaN(y)) {
    document.write('Los elementos no se pueden sumar aritmeticamente');
}else {
    document.write('Los elementos  se pueden sumar aritmeticamente' + (parseInt(x) + parseInt(y)));
}

//parseFloat es para que pueda sumar cuando las varianles son decimales se puede usar en ves de parseInt
