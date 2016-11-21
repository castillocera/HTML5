//document.write('Hola Mundo, <strong>BRAYAN</strong>');
var mi_variable;
var mi_variable2;
var a,b,c,d,e;

mi_variable= 'Hola soy BRAYAN'; //letra en comillas simple STRING
mi_variable2=1212; //enteros sin comillas
a=7; //valor flotante son decimales
b=10;

c='12';
d='10';

e=10+10-10;

document.write(mi_variable); //hola soy brayan
document.write(mi_variable2);//1212

document.write(a * b); //70

//Parse int transformara en NUMERICO los STRING

document.write(c+d); //solo une los numero lo considera STRING 1210

document.write(parseInt(c) + parseInt(d)); //22 //transforma el numero en texto en numerico despues lo suman o cualquier operacion
document.write(e); //10
