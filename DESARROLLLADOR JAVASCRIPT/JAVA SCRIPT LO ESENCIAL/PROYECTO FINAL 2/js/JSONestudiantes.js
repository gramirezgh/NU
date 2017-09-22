var estudiantes = [
 {"codigo":"010","nombre":"armando","nota":2,"asistencia":5,"genero":"m"},
 {"codigo":"009","nombre":"luis","nota":10,"asistencia":5,"genero":"m"},
 {"codigo":"008","nombre":"pablo","nota":6,"asistencia":5,"genero":"m"},
 {"codigo":"007","nombre":"vicente","nota":2,"asistencia":5,"genero":"m"},
 {"codigo":"006","nombre":"jose","nota":7,"asistencia":5,"genero":"m"},
 {"codigo":"005","nombre":"german","nota":5,"asistencia":5,"genero":"m"},
 {"codigo":"004","nombre":"maria","nota":5,"asistencia":5,"genero":"m"},
 {"codigo":"003","nombre":"judith","nota":9,"asistencia":5,"genero":"f"},
 {"codigo":"002","nombre":"marco","nota":7,"asistencia":5,"genero":"m"},
 {"codigo":"001","nombre":"jhoel","nota":8,"asistencia":5,"genero":"m"}
];

function leerJSON(json){
  var m ="<center>"+"<h2>"+"Listado de Estudiantes"+"</h2>"+"</center><br>";
  var i;
  for (var i = 0; i < json.length; i++) {
      m +=
         "<center>"+
          "<form>"+
            "<table>"+
                "<tr>"+"<td>"+"Codigo : "+json[i].codigo+"</td>"+
                "<td>"+"Nombre : "+ json[i].nombre+"</td>"+
                "<td>"+"Nota : "+json[i].nota+"</td>"+
                "<td>"+"Asistencia : "+json[i].asistencia+"</td>"+
                "<td>"+"Genero : "+json[i].genero+"<br>"+"</td>"+"</tr>"
            "</table>"+
          "</form>"
          "</center>";
  }
  document.getElementById('a').innerHTML = m;
}

function mostrarJSON(){
  leerJSON(estudiantes);
}


function myCreateFunction(json) {

  for (var i = 0; i < json.length; i++) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    //  var row = table.insertRow(1);
    //  var row = table.insertRow(2);
    //  var row = table.insertRow(3);
    //  var row = table.insertRow(4);
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

  function myCreateFunctio(){
    myCreateFunction(estudiantes);
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
    r = q/j;
  }
  document.getElementById('b').innerHTML = r;
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
        var aux;
      //  var lista = [(json[i].nota, json[i].nombre), (json[i].nota, json[i].nombre)];
      // var aux = json[i].nota+"  "+json[i].nombre;
      // document.getElementById("b").innerHTML = aux;
       document.getElementById("c").innerHTML=("Nombre : "+json[i].nombre+"<br> Nota :"+json[i].nota);
     }
    //  document.getElementById("b").innerHTML=("Nombre : "+json[i].nombre+"<br> Nota :"+json[i].nota);
    //  document.getElementById("b").innerHTML = lista;
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
      //  var aux;
      //  var lista = [(json[i].nota, json[i].nombre), (json[i].nota, json[i].nombre)];
      // var aux = json[i].nota+"  "+json[i].nombre;
      // document.getElementById("b").innerHTML = aux;
      document.getElementById("d").innerHTML=("Nombre : "+json[i].nombre+"<br> Nota :"+json[i].nota);
     }
    //  document.getElementById("b").innerHTML=("Nombre : "+json[i].nombre+"<br> Nota :"+json[i].nota);
    //  document.getElementById("b").innerHTML = lista;
    }
}

function notaMenor(){
  menor(estudiantes);
}
