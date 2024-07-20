// enhanced object literals

let name = "Samrat Mali";
let age = 20;
let city = "Peth";

const person = {
    name,
    age,
    city,
    greet() {
        return `Hey ${this.name}! How's the ${this.city}?`;
    }
}

console.log(person);

/*
    Output:

    {
    name: 'Samrat Mali',
    age: 20,
    city: 'Peth',
    greet: [Function: greet]
    }
*/

// computed property

let marks = 90;
let grade = "A+";

const result = {
    [marks]: grade
};

console.log(result);

/*
    Output:

    { '90': 'A+' }
*/