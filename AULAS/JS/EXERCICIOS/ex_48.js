let diaSemana = 7;
let mensagem = "";

switch (diaSemana) {
    case 1:
        mensagem = "Sunday (Domingo)";
        break;
    case 2:
        mensagem = "Monday (Segunda-feira)";
        break;
    case 3:
        mensagem = "Tuesday (Terça-feira)";
        break;
    case 4:
        mensagem = "Wednesday (Quarta-feira)";
        break;
    case 5:
        mensagem = "Thursday (Quinta-feira)";
        break;
    case 6:
        mensagem = "Friday (Sexta-feira)";
        break;
    case 7:
        mensagem = "Saturday (Sábado)";
        break;
    default:
        mensagem = "Não é um dia da semana";
        break;
}

console.log(mensagem);