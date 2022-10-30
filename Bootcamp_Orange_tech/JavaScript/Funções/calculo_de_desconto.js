/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

function calculaPagamento(formaDePagamento, preco) {
    if (formaDePagamento === 'Débito') {
        return (preco - (preco * 0.1));
    } else if (formaDePagamento === 'Pix' || formaDePagamento === 'Dinheiro') {
        return (preco - (preco * 0.15));
    } else if (formaDePagamento === 'Duas vezes') {
        return preco;
    } else {
        return preco + (preco * 0.10);
    }
}

function main() {
    const formaDePagamento = 'Acima de Duas vezes';
    const preco = 50.00;
    let precoCobrado = 0;

    precoCobrado = calculaPagamento(formaDePagamento,preco);
    console.log(precoCobrado);
}

main();