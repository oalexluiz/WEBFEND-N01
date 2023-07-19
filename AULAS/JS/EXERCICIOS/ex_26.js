let A = 10
let B = 10
let C = 10

if ( A == B && B == C && C == A) {
    console.log(`O triangulo é Equilátero`)
}
else if ( A != B && B != C && C != A) {
    console.log(`O triangulo é Escaleno`)
}

else {
    console.log(`O triangulo é Isosceles`)
}
