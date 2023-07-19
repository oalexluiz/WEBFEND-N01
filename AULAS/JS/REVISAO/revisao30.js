let EstaçãodoAno = 1;
let mensagem = "";

switch (EstaçãodoAno) {
    case 1:
        mensagem = "Outono";
        break;
    case 2:
        mensagem = "Inverno"
        break;
    case 3:
        mensagem = "Primavera"
        break;
    case 4:
        mensagem = "Verão"
        break;
    default:
        mensagem = "Numero de Estação Invalida!"
}

console.log(mensagem)