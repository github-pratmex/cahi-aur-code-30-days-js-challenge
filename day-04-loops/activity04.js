// nested loops

let i;
let j;

for(i = 0; i < 5; i++) {
    for(j = 0; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

/*
    Output:

    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
*/