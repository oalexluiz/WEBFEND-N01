let nomes = []
let nome = 0
let i = 0

while (i < 3) {
    nome = prompt("Digite um nome:")
    // prompt atribui texto
    nomes.push(nome)
    console.log(nomes[1]);
    i++
}

console.log(nomes);

let numeros = [];
let numero
let soma = 0;
let i = 0;

while (i < 5) {
    numero = Number(prompt("Digite um numero:"));
    numeros.push(numero);
    soma += numeros[i]
    console.log(numeros[i])
    i++;
    }
    
alert(soma)

let nomes  = []
let nome;
let qtdNomes = Number(prompt("Digite  a quantidade de nomes que"))
let valorNome = document.querySelector("#nomes")

// valorNome.innerHTML = "Bruno"

let i = 0

while (i < qtdNomes) {
    nome = prompt(`Digiti o ${i+1}º nome`)
    nomes.push(nome)
    valorNome.innerHTML += nome + "<br>"
    i++
}