let numero = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0


for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 === 0) {
     soma++
    }
}

console.log(soma)