var signo, num1, num2;
signo = window.prompt('Introduce la operación: ');
if (signo == '+' || signo == '-' || signo == '/' || signo == '*' ) {

  num1 = window.prompt('Introduce el numero 1: ');
  num2 = window.prompt('Introduce el numero2:' );

  if (isNaN(num1) || isNaN(num2)) {
    window.alert('Debes introducir numeros');
  }else {
     switch (signo) {
       case '+':
        document.write('El resultado de la suma entre' + num1 + '+' + num2 + 'es igual a' +(parseInt(num1)+parseInt(num2)));
         break;
         case '-':
          document.write('El resultado de la resta entre' + num1 + '-' + num2 + 'es igual a' +(num1+num2));
           break;
           case '*':
            document.write('El resultado de la multiplicacion  entre' + num1 + '*' + num2 + 'es igual a' +(num1*num2));
             break;

             default:
         document.write('El resultado de la división entre' + num1 + '/' + num2 + 'es igual a' +(num1/num2));
     }
  }

} else {
  window.alert('Solo signos aritmeticos (+ - / *)')
  }
