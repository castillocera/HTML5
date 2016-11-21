if (12==1) {
document.write('si son iguales');
}else {
  document.write('No son iguales');
}



if (12!=1) {
document.write('ES DIFERENTE');
}else {
  document.write('NO ES DIFERENTE');
}



if (12>=1) {
document.write('ES MAYOR O IGUAL');
}else {
  document.write('ES MENOR ');
}


//TIPO BOOLEANOS
var x,y;
x=true; //1
y=false;//0
/*
if (false) {
  document.write('si');
} else {
  document.write('no');
}
*/
if (x) {
  document.write('si'); //verdadero
} else {
  document.write('no'); //false
}

//operador Y con else if
var a;
a=1;
if (a!=1 && a<1) {
  document.write('a es distinto de uno');
}else if (a==1) {
  document.write('a es igual de uno');
}else if (a>1) {
  document.write('a es es mayor  de uno');
} else {
  document.write('No se cumple ninguna de las condiciones');
}


//operador OR

var b;
b=4;
if (b != 1 || b < 1) {
  document.write('b es distinto de uno');
}else if (b == 1) {
  document.write('b es igual de uno');
}else if (b > 1) {
  document.write('b es es mayor  de uno');
} else {
  document.write('No se cumple ninguna de las condiciones');
}


//if COMPACTO
//para condiciones mas sencillas
//sirve para ahorrar codigo, memoria

var p;
p= 1 == 1 ? 'Sin son iguales con if compacto' : 'No son iguales con if compacto';      //DESDE ACA IF COMPACTO EL RESULTADO QUE DEVUELVE SE ALMACENA EN EL VARIABLE p
document.write(p)

var p;
p= 3 == 1 ? 'Sin son iguales con if compacto' : 'No son iguales con if compacto';      //DESDE ACA IF COMPACTO EL RESULTADO QUE DEVUELVE SE ALMACENA EN EL VARIABLE p
document.write(p) //aca saldria falso

//es igual que decir con IF
p=1;
if (p==1) {
 document.write(' es igual a uno con IF')
}else {
  document.write(' es DIFERENTE  a uno con IF')
}
