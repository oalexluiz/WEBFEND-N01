function soma(a, b) {
    return a + b;
  }
  
  const resultado = soma(3, 4);
  console.log(resultado); // Output: 7

    // exemplo 1

  function somar(a, b) {
    const resultado = a + b;
    return resultado;
  }
  
  const resultadoSoma = somar(3, 4);
  console.log(resultadoSoma); // Saída: 7

    // exemplo 2


  function verificarPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const numero1 = 6;
  const numero2 = 9;
  
  console.log(verificarPar(numero1)); // Saída: true
  console.log(verificarPar(numero2)); // Saída: false


  // exemplo 3

  function encontrarMaiorValor(array) {
    let maiorValor = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maiorValor) {
        maiorValor = array[i];
      }
    }
    return maiorValor;
  }

 
  const numeros = [5, 9, 2, 11, 3, 8];
  const maiorNumero = encontrarMaiorValor(numeros);
  console.log(maiorNumero); // Saída: 11

   // exemplo 4

  function exibirMensagem() {
    console.log("Olá, seja bem-vindo!");
  }
  
  exibirMensagem(); // Saída: Olá, seja bem-vindo!

  // exemplo 5

  function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  const numeroAleatorio = gerarNumeroAleatorio();
  console.log(numeroAleatorio); // Saída: um número aleatório entre 1 e 10

