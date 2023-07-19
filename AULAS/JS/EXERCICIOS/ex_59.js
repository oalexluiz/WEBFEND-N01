let n = Math.floor(Math.random() * 20);
let p = 0;
let i = 0;

while ( n != 0) {
    if (n % 2 == 0){
        console.log(`o ${n} é um número Par`);
        p++
    } else {
        console.log(`o ${n} é não um número Par`);
        i++
    }
    n = Math.floor(Math.random() * 20);
}

console.log(`Pares = ${p}`)
console.log(`Impares = ${i}`)