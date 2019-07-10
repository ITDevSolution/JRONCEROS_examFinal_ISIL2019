/*
Diseñar un programa que permita mostrar el resultado de las elecciones municipales. Los 3 partidos que
participan son “ALFA”, “BETA” y “GAMMA”. Son “N” los electores. Terminado el proceso, el programa
deberá indicar que partido ganó las elecciones, deberá mostrar el número de votantes por cada partido y el
total de votantes en general .
*/


function mostrarResultado(electores){
     var ganador = 0;
     var a = 0;
     var b = 0;
     var g = 0;
          for(var i=1;i<=electores;i++){
               var partido = parseInt(prompt("Seleccione el partido a votar: 'ALFA' = 1, 'BETA' = 2 o 'GAMMA' = 3"));
               switch (partido) {
                    case 1:
                         a++;
                         alert("Usted voto por ALFA !!")
                         break;
          
                    case 2:
                         b++;
                         alert("Usted voto por BETA !!")
                              break;
                    case 3:
                         g++;
                         alert("Usted voto por GAMMA !!")
                              break;
               }

          }
     if(a>b && a>g){
          alert("el ganador de las elecciones municipales es ALFA");
     }else 
     if(b>a && b >g){
          alert("el ganador de las elecciones municipales es BETA");
     }else if(g>a && g>b){
          alert("el ganador de las elecciones municipales es GAMMA");
     }else{
          alert("Se definiera nuevamente por que tenemos un EMPATE!!");
     }

     document.write("El numero de votantes por el partido ALFA es: "+a+"<br>");
     document.write("El numero de votantes por el partido BETA es: "+b+"<br>");
     document.write("El numero de votantes por el partido GAMMA es: "+g+"<br>");

     document.write("Total de votantes: "+electores);

}

var electores = parseInt(prompt("Ingrese la cantidad de electores a votar: "));
     if(electores===0){
          alert("El numero ingresado es 0 por lo tanto no hay VOTANTES");
     }
mostrarResultado(electores);

