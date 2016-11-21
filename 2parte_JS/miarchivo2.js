
window.onload = function() { //WINDOW ONLOAD PRIMERO SE CARGA LA PAGINA DESPUES SE EJECUTARA EL JS
/*
var c;
 c = document.getElementById('campo').value; //llama el valor del campo asi se apunta al valor de un ELEMENTO ID en el HTML
 console.log(c);
 */
/*
 var c,i;
 i=document.getElementById('campo').value;
 c=document.getElementById('check').checked;
 if (c==true) {
   document.getElementById('prueba').innerHTML ='Esto lo estoy metiendo desde JAVAS al div prueba'
 } */
/*
var html;
html = document.getElementById('prueba').innerHTML;
console.log(html); //lo llevara a la consola todo los formularios
                  //sirve para hacer animaciones e interacciones con los usuarios en pantalla

*/
/*
documente.getElementById('campo') //Nombre del ID del elemnto del HTML
*/
/*
//funcion OBLUR SE EJECUTA CUANDO SE DESELECCCIONA
    document.getElementById('text').onblur = function(){
        document.getElementById('resultado').innerHTML = 'has deseleccionado el textareea';
    }

*/

/*
//uSAREMOS ONLOAD usa selects en texarea inputs se ejecuta cuando deselecionamos
//sirve para modificar  este elemento
  document.getElementById('text').onchange = function(){
    var c=document.getElementById('text').value;
    document.getElementById('resultado').innerHTML =c;
  }
*/

/*
//EVENTO ONCLICK
//para que se accionen botones si se le daclick sucede alguna cosa
//cuando hacemos click y soltamos funciona incluye su uso en cualquiera parte de HTML
  document.getElementById('boton').onclick = function () {
    var content = document.getElementById('text').value;
    document.getElementById('resultado').innerHTML += ' '+content;
  }
*/

/*
//EVENTO ONDBLCLICK
//FUNCIONA CUANDO SE HACE DOBLE CLICK Y SE APLICA PARA TODOS LOS ELEMENTOS HTML
  document.getElementById('boton').ondblclick = function () {
    var content = document.getElementById('text').value; //el valor que tenga el valor tex area
    document.getElementById('resultado').innerHTML += ' '+ content; //con el iner lo pasamos al contenido del div
  }
*/


/*
//EVENTO ONFOCUS
//dispara cuando se selecciona un elemento
//cuando lo enfocamos los input body  y otras 6 etiquetas
//foco es cuandoindicamos un elemento se vuelve color celestito

document.getElementById('text').onfocus = function(){
  window.alert('se ha enfocado al text area');
}
*/


/*
//EVENTO onkeydown
//sirvePARA CUANDO ACCIONA CUANDO PULSAMOS LA TECLA SIN NECESIDAD DE  SOLTARLO
//SIRVE PARA TODAS LAS etiquetas - CUANDO HUNDIMOS LA TECLA
document.getElementById('text').onkeydown= function () {
  window.alert('Se ha presionado la tecla');
}
*/

/*
//evento ONKEYPRESS
//todo para formularios y de body
//cuando presionamos una tecla aparece en el mensaje
//antes que aparezca la letra se ejecuta al contrario del anterior
document.getElementById('text').onkeypress= function () { //funcion anonima
  window.alert('Se ha presionado la tecla');
}
*/

/*
//evento onkeyup
//Se ejecuta en seguida se suelte la tecla
document.getElementById('text').onkeyup= function () { //funcion anonima
  var texarea = document.getElementById('text').value;
  document.getElementById('resultado').innerHTML = parseInt(texarea)*2;
}
*/
/*
//EVENTO ONMOUSEDOWN
//VALIDO PARA TODOS LOS ELEMENTOS DE HTML
//EJECUTA CUANDO APLASTAMOS EL MAUSE SIN SOLTARLO
document.getElementById('resultado').onmousedown= function () { //funcion anonima
  window.alert('has tocado el boton del mause');
}
*/
/*
//EVENTO ONMOUSEMOVE
//SE EJECUTA EN CUALQUIER ETIQUETA html
document.getElementById('html').onmousemove= function () { //funcion anonima
  window.alert('has movido el cursor del mause denro del area!!!'); //para juegos cosas animadas
}
*/
/*
//EVENTO ONMOUSEOUT
//SE EJECUTA EN CUALQUIER ETIQUETA html
//se aplica cuando sale del elemento es decir cuando sale del elemento dond
document.getElementById('resultado').onmouseout= function () { //funcion anonima
  window.alert('has sacado el cursor del mause  del area!!!'); //para juegos cosas animadas
}
*/

/*
//EVENTO ONMOUSEOVER
//SE EJECUTA EN CUALQUIER ETIQUETA html
//se aplica cuando entra al elemento
document.getElementById('resultado').onmouseover= function () { //funcion anonima
  window.alert('has metido el cursor del mause al area!!!'); //para juegos cosas animadas
}
*/

/*
//EVENTO ONMOUSEUP
//SE EJECUTA EN CUALQUIER ETIQUETA html
//se ejecuta cuando soltamos un boton es decir cuando clickeamos y soltamos se ejecuta
document.getElementById('resultado').onmouseup= function () { //funcion anonima
  window.alert('has clickeado dentro del area verdecito que es un div!!'); //para juegos cosas animadas
}
*/

/*
//EVENTO ONRESET
//SE EJECUTA EN CUALQUIER fORM
//SIRVE PARA RESETEAR FORMULARIOS
document.getElementById('fr').onreset = function () { //funcion anonima
  window.alert('has resetado el formulario!!!'); //para juegos cosas animadas
}
*/
/*
//EVENTO ONRESIZE
//SE EJECUTA EN CUALQUIER BODY y modifica el tamño de la ventaa del navegador
//SIRVE PARA RESETEAR FORMULARIOS
document.getElementById('cuerpo').onresize = function () { //funcion anonima
  window.alert('CAMBIASTE EL TAMAÑO DE LA VENTANA DEL NAVEGADOR!!!'); //para juegos cosas animadas
}
*/

/*
//EVENTO ONSELECT
//SE EJECUTA INPUT y TEXAREA exclusivamente
//SIRVE PARA RESETEAR FORMULARIOS
document.getElementById('text').onselect = function () { //funcion anonima
//  window.alert('HAS SELECCIONADO EL TEXTO DENTRO DEL TEXT AREA!!!');
  document.getElementById('resultado').innerHTML = 'se ha seleccionado el texto'; //aparecera en el div asi le mandamos al div
}
*/



//EVENTO ONSUBMIT
//SE EJECUTA EN CUALQUIER fORM
//se ejecuta cuando enviamos un formulario
document.getElementById('fr').onsubmit = function () { //funcion anonima
  window.alert('Se ha enviado el formulario!!');
}
}
