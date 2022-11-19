function vetor(){
    var entrada = document.getElementById('numero');
    var valor = parseInt(entrada.value);
    var divTabuada = document.getElementById('tabuada');
    for(var i = 0 ; i <= 10 ; i++){
        divTabuada.innerHTML += `<p>${valor} X ${i} = ${valor *i} </p>`
    }
}