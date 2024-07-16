// do while loop

// print numbers from 1 to 5
let i = 1;
do {
    console.log(i);
    i++;
}while(i < 6);

/*
    Output:

    1
    2
    3
    4
    5
*/

// factorial of a number
let num = 9;
let factorial = 1;
let j = num;
do {
    factorial = factorial * j;
    j--;
}while(j > 0);

console.log(`Factorial of ${num} is ${factorial}.`);

/* 
    Output:
    
    Factorial of 9 is 362880.
*/