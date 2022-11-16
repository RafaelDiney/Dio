// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = gets();

//TODO: Imprima se os valores numéricos passados são iguais ou não.

function somatorio(n){
    if(n == 0){
        return 0;
    }
    else{
        return n + somatorio(n - 1);
    }
}

console.log(somatorio(n));
