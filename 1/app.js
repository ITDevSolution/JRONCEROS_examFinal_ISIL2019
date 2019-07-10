/**
 * Diseñar una función que permita retornar la suma de los “N” primeros números naturales. Debe ingresar
   como parámetro el valor “N”
 **/

 function sumaN(n){
      return (n*(n+1))/2;
 }

var numero = parseInt(prompt("Ingrese numero: "));
 
document.getElementById("r").innerHTML = "La suma de los primeros numeros naturales de"+numero+" es: "+sumaN(numero);
