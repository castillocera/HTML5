/*
var x=1;
for (x = 1; x <= 10; x++) {
  document.write('<br/>' + x);
}
*/

//se repite mientras el valor inicial sea verdadera

/*
var  x;
x=1;
while (x<=50) {   //si esta condicion es verdadera se ejecuta si no no lo ejecutara
  document.write(x + '<br>');
  x++;
  if (x==8) {
    break; //sirve para detener
  }
}
*/


//DO WHILE - Se repite al menos una vez y despues se pregunta si es verdadera despues de ejecutarse
/*
var x;
x= -1000;
do {
    document.write(x + '<br>');
    x++;
} while (x<=10);
*/

//FUNCIONES EN JAVASCRIP
function Texto(){
    document.write('Hola soy un texto'+'<br>');
}
Texto(); //llamando las funciones para ahorrar codigo

function Sumar(num1,num2) {
    document.write(num1 +num2 + '<br>');
}
Sumar(5,5); //resultado 10
Sumar(75,6); //resultado 81
Sumar(2,5); //resultado 7

//TABLA DEL NUEVE HASTA EL 50 CON FUNCIONES
function Tabla(num1,num2) {
    document.write(num1 * num2 + '<br>');
}
for (x=0; x<=50;x++) {
  Tabla(9,x)
}
