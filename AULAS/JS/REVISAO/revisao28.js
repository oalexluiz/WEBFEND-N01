let numeroMes = 9;
let mensagem = "";

switch (numeroMes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        mensagem = "Esse Mês possui 31 dias";
        break;

    case 2:
        mensagem = "Esse Mês possui 28 dias";
        break;
    
    case 4:
    case 6:
    case 9:
    case 11:
        mensagem = "Esse Mês possui 30 dias"
        break;
    
    default:
        mensagem = "Numero de Mês Invalido";
}

console.log(mensagem)