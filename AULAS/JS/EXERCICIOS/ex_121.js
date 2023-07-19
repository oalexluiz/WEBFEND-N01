const
    valor1Input = document.getElementById("valor1"),
    valor2Input = document.getElementById("valor2"),
    calcula = document.getElementById("btnSomar"),
    resultado = document.getElementById("resultado"),
    resetar = document.getElementById("bntReset"),
    operacoes = document.getElementById("operacoes")


calcula.addEventListener("click", () => {
    
})

function calcular() {
    const valor1 = Number(valor1Input.value)
    const valor2 = Number(valor2Input.value)
    // resultado.innerHTML = valor1 + valor2

    if (operacoes.value === 'somar'){

        resultado.innerHTML = valor1 + valor2;
    }

    else if (operacoes.value === 'subtrair'){

        resultado.innerHTML = valor1 - valor2;
    }

    else if (operacoes.value === 'multriplicar'){
        resultado.innerHTML = valor1 * valor2;
    }

    else if (operacoes.value === 'dividir'){
        resultado.innerHTML = valor1 / valor2
    }

    else {
        alert ("Erro")
    }
}

resetar.addEventListener('dblclick', () => {
    valor1Input.value = ""
    valor2Input.value = ""
    resultado.innerHTML = "0"
})


// function somar() {
//     const valor1 = Number(valor1Input.value)
//     const valor2 = Number(valor2Input.value)
//     resultado.innerHTML = valor1 + valor2
// }