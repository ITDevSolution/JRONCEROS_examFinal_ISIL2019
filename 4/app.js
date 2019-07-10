/*
Diseñar un programa que permita almacenar en un arreglo 10 valores numéricos. El programa deberá
mostrar los siguientes datos:
a. El promedio de los números ingresados
b. Cuántos números de los ingresados son igual o mayores al promedio
c. Cuántos números de los ingresados son múltiplos de 3
d. Cuál es la suma de los números pares
*/


function Arreglo(){
     var numeros = [];
     for(var i=0; i<10;i++){
          numeros[i] = parseInt(prompt("Ingrese valor N° "+(i+1)));
     }
     return numeros;
}
var Arr = Arreglo();

function promedio(){
     var promedio = 0;
     var suma = 0;
     for(var i=0; i<Arr.length;i++){
          suma += Arr[i];
     }
     return promedio = suma/2;
}
var Promedio = promedio();


function igualMayorPromedio(){
     var contador = 0;
     for(var i =0; i<Arr.length;i++){
          if(Arr[i] >= Promedio)
          contador++;
     }
     return contador;
}
var IgualoMayor = igualMayorPromedio();

function multiplos3(){
     contador=0;
     for(i=0;i<Arr.length;i++){
          if(Arr[i] % 3 == 0){
               contador++;
          }
     }
     return contador;
}
var MultiplosTres = multiplos3();

function sumaNpares(){
     sumaPares = 0;
     for(i=0; i<Arr.length; i++){
          if(Arr[i] % 2 == 0){
               sumaPares += Arr[i];
          }
     }
     return sumaPares;
}
var SumaNumerosPares = sumaNpares();

console.log(Arr);
console.log(Arr.length);
console.log(promedio());
console.log(IgualoMayor);
console.log(MultiplosTres);
console.log(SumaNumerosPares);