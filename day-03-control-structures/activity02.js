// Nested if-else

let num1 = 12;
let num2 = 34;
let num3 = 5;

if(num1 >= num2) {
    if(num1 >= num3) {
      console.log(`${num1} is largest.`);
    } else {
        console.log(`${num3} is largest.`);
    }
} 
else {
    if(num2 >= num3) {
      console.log(`${num2} is largest.`); 
    } else {
      console.log(`${num3} is largest.`); 
    }
}

/*
    Output:

    34 is largest.
*/