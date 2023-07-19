let idade = 17;

if (idade >= 18) {
    console.log("Você tem idade para dirigir");
}
else {
    console.log("Você não tem idade para dirigir");
}

let numero = 0

if (numero > 0) {
    console.log(`o número ${numero} é positivo`);
}
else if (numero < 0) {
    console.log(`o número ${numero} é negativo`);
}
else {
    
    console.log(`o número é ${numero}`);
}

let senha = "senai123"

if (senha == "" || senha == " ") {
    console.log("Erro");
}
else {
    if (senha != "senai123" && senha != "SENAI123" && senha != "Senai123"){
        console.log("Senha incorreta");
    }
    else {
        console.log("Senha correta");
    }
}

let senha1 = "bruno"
let senha2 = "bruno"

if (senha1 == senha2) {
    console.log("As senhas são iguias");
}
else {
    console.log("As senhas estão diferentes");
}

console.log("Fim");