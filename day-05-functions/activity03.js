// arrow functions - shorter and cleaner way 

let sum = (num1, num2) => num1 + num2;

let num1 = 67.894;
let num2 = 67.907;

let result = sum(num1, num2);

console.log(`${num1} + ${num2} = ${result.toFixed(2)}`);

/*
    Output:

    67.894 + 67.907 = 135.80
*/

let findChar = (str, char) => {
    return str.includes(char);
}

let isIncluded = findChar("pratmex", 's');

console.log(isIncluded);

/*
    Output:

    false
*/
