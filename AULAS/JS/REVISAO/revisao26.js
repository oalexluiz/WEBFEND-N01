let DiaSemana = 6;
let mensagem = "";

switch (DiaSemana) {
    case 1:
        mensagem = "Hoje é Domingo";
        break;
    case 2:
        mensagem = "Hoje é Segunda-Feira";
        break;
    case 3:
        mensagem = "Hoje é Terça-Feira";
        break;
    case 4:
        mensagem = "Hoje é Quarta-Feira";
        break;
    case 5:
        mensagem = "Hoje é Quinta-Feira";
        break;
    case 6:
        mensagem = "Hoje é Sexta-Feira";
        break;
    case 7:
        mensagem = "Hoje é Sábado";
        break;
    default:
        mensagem = "Dia Inválido"
}

console.log(mensagem)