var estudiantes = [
 {"codigo":"020","nombre":"Andres Copa","nota":7,"asistencia":6,"genero":"M"},
 {"codigo":"019","nombre":"Arturo Mendez","nota":7,"asistencia":6,"genero":"M"},
 {"codigo":"018","nombre":"Liliana Carvajal","nota":9,"asistencia":8,"genero":"F"},
 {"codigo":"017","nombre":"Jhoan Velasco","nota":6,"asistencia":5,"genero":"M"},
 {"codigo":"016","nombre":"Minoslava Herrera","nota":6,"asistencia":5,"genero":"F"},
 {"codigo":"015","nombre":"Dilan Borquez","nota":7,"asistencia":6,"genero":"M"},
 {"codigo":"014","nombre":"Mauricio Gutierrez","nota":5,"asistencia":4,"genero":"M"},
 {"codigo":"013","nombre":"Mario Macias","nota":4,"asistencia":3,"genero":"M"},
 {"codigo":"012","nombre":"Jhenny Manrique","nota":4,"asistencia":3,"genero":"F"},
 {"codigo":"011","nombre":"Irma Mujica","nota":7,"asistencia":6,"genero":"F"},
 {"codigo":"010","nombre":"Armando Vega","nota":2,"asistencia":1,"genero":"M"},
 {"codigo":"009","nombre":"Luis Luna","nota":10,"asistencia":10,"genero":"M"},
 {"codigo":"008","nombre":"Pablo Coareti","nota":6,"asistencia":5,"genero":"M"},
 {"codigo":"007","nombre":"Vicente Mendoza","nota":2,"asistencia":1,"genero":"M"},
 {"codigo":"006","nombre":"Jose Maldonado","nota":7,"asistencia":6,"genero":"M"},
 {"codigo":"005","nombre":"German Jauregui","nota":5,"asistencia":4,"genero":"M"},
 {"codigo":"004","nombre":"Maria Velasco","nota":6,"asistencia":5,"genero":"M"},
 {"codigo":"003","nombre":"Judith Callisaya","nota":7,"asistencia":6,"genero":"F"},
 {"codigo":"002","nombre":"Marco Santander","nota":7,"asistencia":6,"genero":"M"},
 {"codigo":"001","nombre":"Jhoel Martinez","nota":10,"asistencia":9,"genero":"M"}
];

function leerJSON(json){
  for (var i = 0; i < json.length; i++) {
    var table = document.getElementById("tabla");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = json[i].codigo;
    cell2.innerHTML = json[i].nombre;
    cell3.innerHTML = json[i].nota;
    cell4.innerHTML = json[i].asistencia;
    cell5.innerHTML = json[i].genero;
  }
}

function mostrarJSON(){
  leerJSON(estudiantes);
}


function promedio(json){
  var p = 0;
  var q = 0;
  var r = 0;
  var i;
  for (var i = 0; i < json.length; i++) {
    p = json[i].nota;
    j = i+1;
    q = (q+p);
    r = Math.round(q/j);
  }
   alert("El promedio de notas es : "+r);
  // document.getElementById('b').innerHTML = r;
}

function notaPromedio(){
  promedio(estudiantes);
}

function mayor(json){
  for (var i = 0; i < json.length; i++) {
     if(
       (json[i].nota >= json[0].nota)&&
       (json[i].nota >= json[1].nota)&&
       (json[i].nota >= json[2].nota)&&
       (json[i].nota >= json[3].nota)&&
       (json[i].nota >= json[4].nota)&&
       (json[i].nota >= json[5].nota)&&
       (json[i].nota >= json[6].nota)&&
       (json[i].nota >= json[7].nota)&&
       (json[i].nota >= json[8].nota)&&
       (json[i].nota >= json[9].nota)
     )
     {
       alert("La nota mayor es : "+json[i].nota+" y el nombre del alumno es : "+json[i].nombre);
      //  document.getElementById("c").innerHTML=("Nombre : "+json[i].nombre+"<br> Nota :"+json[i].nota);
     }
    }
}

function notaMayor(){
  mayor(estudiantes);
}

function menor(json){
  for (var i = 0; i < json.length; i++) {
     if(
       (json[i].nota <= json[0].nota)&&
       (json[i].nota <= json[1].nota)&&
       (json[i].nota <= json[2].nota)&&
       (json[i].nota <= json[3].nota)&&
       (json[i].nota <= json[4].nota)&&
       (json[i].nota <= json[5].nota)&&
       (json[i].nota <= json[6].nota)&&
       (json[i].nota <= json[7].nota)&&
       (json[i].nota <= json[8].nota)&&
       (json[i].nota <= json[9].nota)
     )
     {
       alert("La nota menor es : "+json[i].nota+" y el nombre del alumno es : "+json[i].nombre);
      // document.getElementById("d").innerHTML=("Nombre : "+json[i].nombre+"<br> Nota :"+json[i].nota);
     }

    }
}

function notaMenor(){
  menor(estudiantes);
}


function obtenerPromedioAsistencia(json){
  var p = 0;
  var q = 0;
  var s = 0;
  var i;
  for (var i = 0; i < json.length; i++) {
    p = json[i].asistencia;
    j = i+1;
    q = (q+p);
    s = Math.round(q/j);
  }
  alert("El promedio de asistencia es : "+s);
}

function promedioAsistencia(){
  obtenerPromedioAsistencia(estudiantes);
}

function obtenerGenero(json){
  var f = 0;
  var m = 0;
  for (var i = 0; i < json.length; i++) {
    if (json[i].genero=="F" || json[i].genero=="f") {
       f = f+1;
    }
    else{
       m = m+1;
    }
  }
  alert("La cantidad de mujeres es : "+f+" y la cantidad de hombres es : "+m);
}

function mostrarGenero(){
  obtenerGenero(estudiantes);
}
