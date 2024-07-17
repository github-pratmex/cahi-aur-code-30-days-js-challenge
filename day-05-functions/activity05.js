// higher order functions

function helloWorld() {
    console.log("Hello, Brother!");
}

function loopFunction(fun, num) {

    for(let i = 0; i < num; i++) {
        fun();    
    }
}

loopFunction(helloWorld, 5);

/*
    Output:

    Hello, Brother!
    Hello, Brother!
    Hello, Brother!
    Hello, Brother!
    Hello, Brother!
*/

function square(num) {
    return num ** 2;
}

function cube(squareResult) {
    return squareResult ** 3; 
}

function theLastResult(square, cube, num) {
    let squareResult = square(num);
    let cubeResult = cube(squareResult);

    return cubeResult;
}

let lastResult = theLastResult(square, cube, 12);

console.log(lastResult);

/*
    Output:

    2985984
*/