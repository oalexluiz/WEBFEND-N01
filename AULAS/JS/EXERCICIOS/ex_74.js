let num = 0;

for ( let i = 0; i <= 100; i++) {
    if (i % 2 === 0 ) {
        num += i
    }
}

console.log(`O valor de soma de todos os numeros pares ate 100 é de ${num}`);