// Spread Operator

const arr = [2, 3, 5, 7];

const newArr = [...arr, 11, 13, 17, 19];

console.log(`New array: ${newArr}`); // Output: New array: 2,3,5,7,11,13,17,19

// rest operator or rest parameter

function sum(...numbers) {
    let total = 0;
    for(let i of numbers) {
        total += i
    }
    return total;
}

let result = sum(34, 56, 78, 45, 10);

console.log(`Sum: ${result}`); // Output: Sum: 223