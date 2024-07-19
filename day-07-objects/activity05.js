const book = {
    title: "Tomorrow's wish!",
    author: "Prathamesh Hegade",
    year: 2024
}

for(let property in book) {
    console.log(`${property}: ${book[property]}`);
}

/*
    Output:

    title: Tomorrow's wish!
    author: Prathamesh Hegade
    year: 2024
*/

// Object.keys() Object.values()

console.log(`The keys in the object book: ${Object.keys(book)}.`);
// OUtput: The keys in the object book: title,author,year.

console.log(`The values in the objet book: ${Object.values(book)}.`);
// Output: The values in the objet book: Tomorrow's wish!,Prathamesh Hegade,2024.