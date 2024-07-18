// array iteration

let rappers = ["Lil Wayne", "Eminem", "Tupac", "Biggie", "NEFFEX"];

// iterate using for loop
for(let rapper = 0; rapper < rappers.length; rapper++) {
    console.log(rappers[rapper]);
}

/*
    Output:

    Lil Wayne
    Eminem
    Tupac
    Biggie
    NEFFEX
*/

console.log("\n\n\n\n");

// iterate using forEach()

rappers.forEach(function(rapper) {
    console.log(rapper)
});

/*
    Output:

    Lil Wayne
    Eminem
    Tupac
    Biggie
    NEFFEX
*/