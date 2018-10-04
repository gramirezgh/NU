process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    if(!isNaN(chunk)){
        decremento(chunk);
    }else{
        process.stout.write('No es numero valido');
    }
});

process.stdin.on('end', function () {
    process.stdout.write('end');
});

function decremento(numero) {
    var intervalo = setInterval(function () {
       numero-=1;
       process.stdout.write(numero+"\n");
       if(numero==0){
            process.stdout.write("Secuencia Terminada");
            clearInterval(intervalo);
       }
    }, 500);
}