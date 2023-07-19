let diaSemana = 4;
let mensagem = "";

switch (diaSemana) {
    case 1:
        mensagem = "Domingo Fim de Semana";
        break;
    case 2:
        mensagem = "Segunda-feira é Dia Útil";
        break;
    case 3:
        mensagem = "Terça-feira é Dia Útil";
        break;
    case 4:
        mensagem = "Quarta-feira é Dia Útil";
        break;
    case 5:
        mensagem = "Quinta-feira é Dia Útil";
        break;
    case 6:
        mensagem = "Sexta-feira é Dia Útil";
        break;
    case 7:
        mensagem = "Sábado Fim de Semana";
        break;
    default:
        mensagem = "Não é um dia da semana";
        break;
}

console.log(mensagem);