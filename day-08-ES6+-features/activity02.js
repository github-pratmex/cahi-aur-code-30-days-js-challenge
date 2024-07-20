// array destructing
 
const numbers = [1, 2, 3, 4, 5];

let [firstNumber, secondNumber] = numbers;

console.log(`First number: ${firstNumber}, Second number: ${secondNumber}`);

// Output: First number: 1, Second number: 2


// object destructing

const book = {
    title: "The C Programming",
    author: "Dennis Ritchie"
};

let {title, author} = book;

console.log(`Title: ${title}, Author: ${author}`);

// Output: Title: The C Programming, Author: Dennis Ritchie
