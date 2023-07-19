const dataAtual = new Date();
const dia = dataAtual.getDate();

console.log(dia)

if (dia % 2 == 0) {
    console.log("Par")
}
    else {
    console.log("impar")
}