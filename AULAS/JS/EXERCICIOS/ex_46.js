let regiao = 20;
let estado = "";

switch (regiao) {
    case 1:
        regiao = "Região Norte";
        estado = "Amazonas (AM)";
        break;
    case 2:
        regiao = "Região Norte"; 
        estado = "Roraima (RR)";
        break;
    case 3:
        regiao = "Região Norte ";
        estado = "Amapá (AP)";
        break;
    case 4:
        regiao = "Região Norte";
        estado = "Pará (PA)";
        break;
    case 5:
        regiao = "Região Norte";
        estado = "Tocantins (TO)";
        break;
    case 6:
        regiao = "Região Norte";
        estado = "Rondônia (RO)";
        break;
    case 7:
        regiao = "Região Norte";
        estado = "Acre (AC)";
        break;
    case 8:
        regiao = "Região Nordeste";
        estado = "Maranhão (MA)";
            break;
    case 9:
        regiao = "Região Nordeste";
        estado = "Piauí (PI)";
        break;
    case 10:
        regiao = "Região Nordeste";
        estado = "Ceará (CE)";
            break;
    case 11:
        regiao = "Região Nordeste";
        estado = "Rio Grande do Norte (RN)";
        break;
    case 12:
        regiao = "Região Nordeste";
        estado = "Pernambuco (PE)";
        break;
    case 13:
        regiao = "Região Nordeste";
        estado = "Paraíba (PB)";
        break;
    case 14:
        regiao = "Região Nordeste";
        estado = "Sergipe (SE)";
        break;
    case 15:
        regiao = "Região Nordeste";
        estado = "Alagoas (AL)";
        break;
    case 16:
        regiao = "Região Nordeste";
        estado = "Bahia (BA)";
        break;
    case 17:
        regiao = "Região Centro"; 
        estado = "Mato Grosso (MT)";
        break;
    case 18:
        regiao = "Região Centro";
        estado = "Mato Grosso do Sul (MS)";
        break;
    case 19:
        regiao = "Região Centro";
        estado = "Goiás (GO)";
        break;
    case 20:
        regiao = "Região Sudeste";
        estado = "São Paulo (SP)";
        break;
    case 21:
        regiao = "Região Sudeste";
        estado = "Rio de Janeiro (RJ)";
        break;
    case 22:
        regiao = "Região Sudeste";
        estado = "Espírito Santo (ES)";
        break;
    case 23:
        regiao = "Região Sudeste";
        estado = "Minas Gerais (MG)";
        break;
    case 24:
        regiao = "Região Sul";
        estado = "Paraná (PR)";
        break;
    case 25:
        regiao = "Região Sul";
        estado = "Rio Grande do Sul (RS)";
        break;
    case 26:
        regiao = "Região Sul";
        estado = "Santa Catarina (SC)";
        break;
    case 27:
        regiao = "Brasília, A capital do Brasil";
        break;

    default:
        regiao = "Não é um Estado do Brasil";
        break;
}

console.log (regiao + "\n" + estado)