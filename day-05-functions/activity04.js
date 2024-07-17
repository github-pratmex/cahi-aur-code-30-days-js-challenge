// function parameters and default value

let multiply = (num1, num2 = 56) => num1 * num2;

let product = multiply(10);

console.log(product);

/*
    Output:

    560
*/

let happyBirthday = (name, age = 21) => `Happy birthday ${name}! You are now ${age} years old!`;

let greet = happyBirthday("Sachin");

console.log(greet);

/*
    Output:

    Happy birthday Sachin! You are now 21 years old!
*/