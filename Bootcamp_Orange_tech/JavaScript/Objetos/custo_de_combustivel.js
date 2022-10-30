/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carro {
    marca;
    cor;
    gastoMedioCombustivelPorKM;

    constructor(marca, cor, gastoMedioCombustivelPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelPorKM = gastoMedioCombustivelPorKM;
    }

    custoDoPercurso(quantidadeKm, precoCombustivel) {
        console.log(`Será gasto R$${(this.gastoMedioCombustivelPorKM * quantidadeKm * precoCombustivel)} para realizar o percurso.`);
    }

}

function main() {
    const Corsa = new Carro('Chevrolet', 'Preto', 1/7);
    console.log(Corsa);
    Corsa.custoDoPercurso(50, 5.50);
};

main();