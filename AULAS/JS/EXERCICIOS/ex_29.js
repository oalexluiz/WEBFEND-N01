let letra = " a"

letra = letra.toLocaleUpperCase().trim();

if (letra == "") {
    console.log("Você não escreveu nada")
}
else {
    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
        console.log(`A Letra ${letra} é uma Vogal`)
    }
    else {
        console.log(`A Letra ${letra} é uma Consoante`)
    
    }
}