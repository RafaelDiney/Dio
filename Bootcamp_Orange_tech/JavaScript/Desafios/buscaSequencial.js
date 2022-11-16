// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = 81;

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

function buscaSequencial(valor, elementos){
    for (let i = 0; i < elementos.length; i++) {
        if (valor == elementos[i]) {
            return ('Achei '+ valor +' na posicao '+ i);
        }
    }
    return ('Numero '+ valor +' nao encontrado!')
}
console.log(buscaSequencial(valor, elementos));