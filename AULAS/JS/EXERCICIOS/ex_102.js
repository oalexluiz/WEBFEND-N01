let resposta = document.querySelector(".resposta")

function verificaPar(numero) {
    let texto = ""
    if (numero % 2 === 0) {
        texto = "Par"
        return texto;
    } else {
        texto = "Impar"
        return texto;
    }
}

let numero = Number(prompt("Digite o numero"))

resposta.innerHTML = verificaPar(numero)