// loop control statement

// continue

for(let i = 1; i < 11; i++) {
    if(i == 5) {
        continue;
    }
    console.log(i);
}

/*
    Output:

    1
    2
    3
    4
    6
    7
    8
    9
    10
*/

// break

for(let i = 1; i < 11; i++) {
    if(i == 7) {
        break
    }
    console.log(i);
}

/*
    Output:

    1
    2
    3
    4
    5
    6
*/