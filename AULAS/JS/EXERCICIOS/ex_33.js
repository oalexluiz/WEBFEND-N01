let altura = 1.90;
let peso = 85;

let imc = peso / (altura * altura);

if (imc < 17) {
    console.log('Muito abaixo do peso');
  } else if (imc > 17 && imc <= 18.49) {
    console.log('Abaixo do peso');
  } else if (imc >= 18.5 && imc <= 24.99) {
    console.log('Peso normal');
  } else if (imc >= 25 && imc <= 29.99) {
    console.log('Acima do peso');
  } else if (imc >= 30 && imc <= 34.99) {
    console.log('Obesidade I');
  } else {
    console.log('Obesidade II');
  }