
let numPrincipal = document.querySelector("h1");
let textoPrincipal = document.querySelector("h2");
let saidaDeNumeros = document.querySelector("h6");
let botao = document.querySelector("button");
let numMenor;
let numMaior;
let numerosAnteriores = document.querySelector("footer");
let arrayRange;
let arraySorteados = [];
let meuArray2 = [];
let numeroRandomico = 1;
let indiceRandomico;
let i = 0;
let j = 0;

botao.addEventListener('click', trataValores, false);

arrayRange;
arraySorteados = [];
meuArray2 = [];
numeroRandomico = 1;
indiceRandomico;
i = 0;
j = 0;

function trataValores() {
    numMenor = document.querySelector("input#numeroMenor").value;
    numMaior = document.querySelector("input#numeroMaior").value;
    if (numMenor == "") {
        alert("Preencha os campos");
    } else if (numMaior == "") {
        alert("Preencha os campos");
    } else {
        numMenor = parseInt(numMenor);
        numMaior = parseInt(numMaior);

        if (numMenor >= numMaior) {
            alert("Não é possível gerar o sorteio com o intervalo apresentado!");
        } else {
            saidaDeNumeros.innerHTML = "Números já sorteados:";
            arrayRange = criaArrayRange(numMenor, numMaior);
            if (arraySorteados.length == (numMaior - numMenor) + 1) {
                numPrincipal.innerHTML = "Fim do sorteio!"
                textoPrincipal.innerHTML = "Todos os números dentro do intervalo foram sorteados. Recarregue a página para outro sorteio. Obrigado!"
                return;
            }
            while (i < 1) {
                if (arraySorteados.length == (numMaior - numMenor) + 1) {
                    numPrincipal.innerHTML = "Fim do sorteio!"
                    textoPrincipal.innerHTML = "Todos os números dentro do intervalo foram sorteados. Recarregue a página para outro sorteio. Obrigado!"
                    return;
                }
                indiceRandomico = gerarNumero(0, arrayRange.length - 1);
                numeroRandomico = arrayRange[indiceRandomico];
                arraySorteados = criaArraySorteados(numeroRandomico);
                numPrincipal.innerHTML = numeroRandomico;
                numerosAnteriores.innerHTML += numeroRandomico + ' - ';
                i++;
            }

            i++;

            if (i > 2) {
                while (j < 1) {
                    if (arraySorteados.length == (numMaior - numMenor) + 1) {
                        numPrincipal.innerHTML = "Fim do sorteio!"
                        textoPrincipal.innerHTML = "Todos os números dentro do intervalo foram sorteados. Recarregue a página para outro sorteio. Obrigado!"
                        return;
                    }
                    indiceRandomico = gerarNumero(0, arrayRange.length - 1);
                    numeroRandomico = arrayRange[indiceRandomico];
                    if (arraySorteados.indexOf(numeroRandomico) === -1) {
                        numPrincipal.innerHTML = numeroRandomico;
                        numerosAnteriores.innerHTML += numeroRandomico + ' - ';
                        arraySorteados.push(numeroRandomico);
                        j++;
                    }
                }
            }

            j = 0;

        }
    }
}

function criaArraySorteados(num) {
    meuArray2.push(num);
    return meuArray2;
}

function criaArrayRange(comeco, fim) {
    let meuArray = [];
    for (let i = comeco; i <= fim; i++) {
        meuArray.push(i);
    }
    return meuArray;
}

function gerarNumero(min, max) {

    let passo1 = max - min + 1;
    let passo2 = Math.random() * passo1;
    let resultado = Math.floor(passo2) + min;
    return resultado;
}