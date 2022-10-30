function teste(){
    console.log('teste');
}
function sayMyName(name){
    console.log('Your name is ' + name);
}
function quadrado(valor){
   return valor * valor;
}
function incrementarJuros(valor, percentualDeJuros){
    const valorDeAcrescimo = (percentualDeJuros/100) * valor;
    return valor + valorDeAcrescimo;
}

function main(){
    console.log('Programa principal');
}

main();