// default parameters

function multiply(number, multiplyer = 1) {
    return number * multiplyer;
}

let product = multiply(255);

console.log(product); // Output: 255