let timefutebol ="palmeiras";

console.log(timefutebol.length);

let cidade = "saO bERnaRDo do caMPo";

console.log(cidade.toLocaleUpperCase());
console.log(cidade.toLocaleLowerCase());

let pais ="angola";

console.log(pais.charAt(3));
console.log(pais.indexOf("n"));

let frase1 = "olha se vc ama";

console.log(frase1.slice(1, 8));
console.log(frase1.substring(1, 8));

let frase2  = "eu nasci ha 10000 anos atras";

console.log(frase2.replace("anos","dias"));
// substitui o primeiro
console.log(frase2.replaceAll("a", "@"));
// substitui todos 

let cpf = "145.785.632-82"

cpf = cpf.replaceAll("." ,"")
cpf = cpf.replace("-" ,"")
// cpf = (cpf.replaceAll("." ,"")).replace("-", "")

console.log(cpf);

let frase3 = "armei uma arapuca na beira da estrada"

frase3 = frase3.split(" ")
console. log(frase3);

let nome = "     Alex Luiz     "

console.log(nome);

nome = nome.trim()

console.log(nome);