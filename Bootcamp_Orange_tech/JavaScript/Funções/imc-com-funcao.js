/*Código refatorado para promover a utilização de funções,
é possível perceber como o código ficou mais limpo e com maior
facilidade para entender suas funcionalidades.
A função calcularIMC: Receb por parametro o peso e a altura,
com isso a função calcula o IMC e devolve esse valor.
A função ClassificaImc: Recebe o IMC e classfica, retornando
a classificação pré determinada.
A função main: é a nossa função principal, nela podemos chamar
as funções criadas ou adicionar novas funcionalidades ao programa.*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Obeso';
    } else if (imc >= 30 && imc < 40) {
        return 'Abaixo do peso';
    } else {
        return 'Obesidade grave';
    }
}

function main() {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));

}

main();


