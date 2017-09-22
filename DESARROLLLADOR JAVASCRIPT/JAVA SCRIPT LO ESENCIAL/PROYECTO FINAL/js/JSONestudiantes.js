var estudiantes = [
 {"codigo":"001","nombre":"armando","nota":2},
 {"codigo":"002","nombre":"luis","nota":3},
 {"codigo":"003","nombre":"pablo","nota":6},
 {"codigo":"004","nombre":"vicente","nota":2},
 {"codigo":"005","nombre":"jose","nota":17},
 {"codigo":"006","nombre":"gladys","nota":5},
 {"codigo":"007","nombre":"maria","nota":5},
 {"codigo":"008","nombre":"judith","nota":0},
 {"codigo":"009","nombre":"marco","nota":11},
 {"codigo":"010","nombre":"jhoel","nota":10}
];

function leerJSON(json){
  var m ="---Estudiantes---<br>";
  var i;
  for (var i = 0; i < json.length; i++) {
      m += "Codigo : "+json[i].codigo+"Nombre : "+ json[i].nombre+"Nota : "+json[i].nota+"<br>";
  }
  document.getElementById('a').innerHTML = m;
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
    r = q/j;
  }
  document.getElementById('b').innerHTML = r;
}

function notaPromedio(){
  promedio(estudiantes);
}

function mayor(json){
  var j = 10;
  for (var i = 0; i < json.length; i++) {
    // for (var j = 0; j <= i; j++) {
    //   if(json[i].nota > json[j].nota ){
    //      console.log(json[i].nota+"es mayor a "+json[j].nota);
    //   }
    // }
    // while (i < json.length) {
    //   j = j-1;
    //   i++;
    //   if(json[i].nota > json[j].nota){
    //     console.log(json[i].nota+"-----"+j);
    //
    //   }
    // }

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
        document.getElementById("c").innerHTML = (json[i].nota+"--"+json[i].nombre);
      }
  }
}

function notaMayor(){
  mayor(estudiantes);
}

function menor(json){
  var j = 10;
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
        document.getElementById("d").innerHTML = (json[i].nota+"--"+json[i].nombre);
      }
  }
}

function notaMenor(){
  menor(estudiantes);
}
