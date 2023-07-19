let Filme = 2;
let classificacao = "";

switch (Filme) {
    case 1:
        Filme = "Vingadores: Ultimato";
        classificacao = "+12";
        break;
    case 2:
        Filme = "Deadpool";
        classificacao = "+16";
        break;
    case 3:
        Filme = "Homem-Aranha no Aranhaverso";
        classificacao = "+10"
        break;
    case 4:
        Filme = "Homem-Aranha: Sem Volta para Casa";
        classificacao = "+12"        
        break;
    case 5:
        Filme = "Logan";
        classificacao = "+16"
        break;
    default:
        mensagem = "Não é uma Filme";
        break; }

console.log (Filme + "\n" + classificacao)