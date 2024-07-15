// combining conditions

let year = 1900;

if((year % 4 == 0) || ((year % 100 == 0) && (year % 400 == 0))) {
    console.log(`${year} is a leap year.`);
}
else {
    console.log(`${year} is not a leap year.`);
}

/*
    Output:

    1900 is a leap year.
*/