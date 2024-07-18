// array method intermediate

let numbers = [1, 2, 3, 4, 5];

let newArray;

// map

newArray = numbers.map((num) => num * 2);

console.log(newArray); // Output: [ 2, 4, 6, 8, 10 ]

// filter

newArray = numbers.filter((num) => num % 2 == 0);

console.log(newArray); // Output: [ 2, 4 ]

// reduce

let sum = numbers.reduce((previous, current) => previous += current, 0);

console.log(sum); // Output: 15