/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;*/

function calculaMedia(nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3);
}

function classificaMedia(media) {
    if (media < 5) {
        console.log('Reprovado');
    } else if (media > 5 && media < 7) {
        console.log('Recuperação');
    } else {
        console.log('Aprovado');
    }
}

function main() {
    let media = 0;
    media = calculaMedia(2, 3, 8);
    classificaMedia(media);
}

main();