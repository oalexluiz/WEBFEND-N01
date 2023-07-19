let resposta = document.querySelector(".resposta")


function soma(a, b) {
    return a + b;
}


let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))

const resultado = soma(numero1, numero2);
alert(resultado);

resposta.innerHTML = soma(numero1, numero210)