let salario = 1100;

if (salario <= 1000) {
        console.log(`O seu salario saira de ${(salario)} para o valor de ${salario + (0.2 * salario)}`);
}
else if (salario >= 1000 && salario <= 3000) {
        console.log(`O seu salario saira de ${(salario)} para o valor de ${salario +  (salario * 0.15)}`);
}
else {
        console.log(`O seu salario saira de ${(salario)} para o valor de ${salario + (salario * 0.1)}`);
}