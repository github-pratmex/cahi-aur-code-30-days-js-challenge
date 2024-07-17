// function declaration

function evenOdd(num) {
    if(num % 2 == 0) {
        console.log(`${num} is an even number.`);
    }
    else {
        console.log(`${num} is an odd number.`);
    }
}

evenOdd(25);

/* 
    Output:

    25 is an odd number.
*/

function square(num) {
    let result = num ** 2;
    return result;
}

let num = 25;
let result = square(num);

console.log(`${num}^2 = ${result}`);

/*
    Output:

    25^2 = 625
*/