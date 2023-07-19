let num = 5;

    if(num % 4 == 0 || num % 6 == 0 || num % 9 != 0) {
        console.log(`O ${num} é divisivel por 4 e 6, porem não é divisivel por 9`);
    } else if (num % 4 != 0 || num % 6 != 0 || num % 9 == 0) {
        console.log(`O ${num} não é divisivel por 4 e 6, porem é divisivel por 9`);
    } else if  (num % 4 != 0 || num % 6 != 0 || num % 9 != 0)
        console.log(`O ${num} não é divisivel por 4, 6 e nem por 9`);
    ;