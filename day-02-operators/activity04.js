// logical operators

// && logical AND
let a = 23; 
let b = 43;
result = ((a == b) && (a > b));

console.log(`((${a} == ${b}) && (${a} > ${b})) = ${result}`);

// || logical OR

result = ((a == b) || (a < b));

console.log(`((${a} == ${b}) || (${a} < ${b})) = ${result}`);

// ! logical NOT

result = !(a < b);

console.log(`!(${a} < ${b}) = ${result}`);

/*
    Output:

    ((23 == 43) && (23 > 43)) = false
    ((23 == 43) || (23 < 43)) = true
    !(23 < 43) = false
*/