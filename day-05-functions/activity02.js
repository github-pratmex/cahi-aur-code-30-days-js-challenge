// function expression (anonymous functions)

let maximum = function(x, y) {

    if(x >= y) {
        return x;
    }
    else {
        return y;
    }
}

let x = 13;
let y = 67;

let result = maximum(x, y);

console.log(`${result} is greatest between ${x} and ${y}.`);

/*
    Output:

    67 is greatest between 13 and 67.
*/

let concat = function(str1, str2) {
    return str1 + str2;
}

let str1 = "Hello,";
let str2 = " Brother!";

let newStr = concat(str1, str2);

console.log(`New string is ${newStr}`);

/*
    Output:

    New string is Hello, Brother!
*/
