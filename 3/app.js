/*
Diseñar una función que reciba 2 parámetros: Valor Máximo y Valor Mínimo. La función deberá retornar
como respuesta la suma de todos los números que sean múltiplos de 3 y 5 que estén comprendidos entre los
valores ingresados
*/

function sumaNumerosMultiplos3Y5(vMinimo,vMaximo){
     var sumaM3 = 0;
     var sumaM5 = 0;
     var sumaTotal = 0;
     for(var i = vMinimo; i <= vMaximo; i++){
          if(i % 3 == 0){
               sumaM3 += i;
          }
          if(i % 5 == 0){
               sumaM5 +=i;
          }
     }
     return sumaTotal = sumaM3 + sumaM5;
}

document.write("La suma de los numeros multiplos de 3 y 5 es: "+sumaNumerosMultiplos3Y5(2,10));