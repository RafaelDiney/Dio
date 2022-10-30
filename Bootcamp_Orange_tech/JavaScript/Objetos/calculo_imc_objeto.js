class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    descreverValorImc(){
        console.log(`Meu nome é ${this.nome} o valor do meu IMC é ${this.peso/Math.pow(this.altura,2)}`);
    }
}

function main() {
    const Jose = new Pessoa('José', 70, 1.75);
    console.log(Jose);
    Jose.descreverValorImc();
}

main();