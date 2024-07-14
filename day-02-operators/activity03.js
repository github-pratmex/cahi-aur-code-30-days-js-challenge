// comparison operators

// > and <
let a = 67;
let b = 89.78;
let result = a > b;

console.log(`${a} > ${b} = ${result}`);

result = a < b;

console.log(`${a} < ${b} = ${result}`);

// >= and <=
a = 67.89;
b = 89.67;
result = (a >= b);

console.log(`${a} >= ${b} = ${result}`);

result = (a <= b);

console.log(`${a} <= ${b} = ${result}`);

// == and ===

// loose equality (==) inlcudes types conversion
a = 10;
b = 11;
result = (a == b);

console.log(`${a} == ${b} = ${result}`);

a = 78.78;
b = 78.78;
result = (a === b);

console.log(`${a} === ${b} = ${result}`);

/*
    Output:

    67 > 89.78 = false
    67 < 89.78 = true
    67.89 >= 89.67 = false
    67.89 <= 89.67 = true
    10 == 11 = false
    78.78 === 78.78 = true
*/