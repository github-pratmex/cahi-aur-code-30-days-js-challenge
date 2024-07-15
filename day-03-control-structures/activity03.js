// switch case

// day of week
let day = 4;

switch(day) {
    case 1:
        console.log("It's Monday!");
        break;
    
    case 2:
        console.log("It's Tuesday!");
        break;

    case 3:
        console.log("It's Wednesday!");
        break;

    case 4:
        console.log("It's Thursday!");
        break;

    case 5:
        console.log("It's Friday!");
        break;

    case 6:
        console.log("It's Saturday!");
        break;

    case 7:
        console.log("It's Sunday!");
        break;

    default:
        console.log("Not a day!");
        break;
}

/*
    Output:

    It's Thursday!
*/

// result grade

let marks = 98;
let grade;

switch(true) {
    case (marks > 90):
        grade = 'A';
        break;

    case ((marks > 80) && (marks < 91)):
        grade = 'B';
        break;

    case ((marks > 70) && (marks < 81)):
        grade = 'C';
        break;

    case ((marks > 40) && (marks < 71)):
        grade = 'D';
        break;

    default:
        grade = 'F';
        break;
}

console.log(`Your grade is ${grade}`);

/*
    Output:

    Your grade is A
*/