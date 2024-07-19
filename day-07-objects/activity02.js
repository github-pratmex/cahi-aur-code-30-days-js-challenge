// object methods

const book = {
    title: "The C Programming",
    author: "Dennis Ritchie",
    year: 1975
};

book.titleAndAuthor = function() {
    return `Title: ${this.title}, Author: ${this.author}`;
}

console.log(book.titleAndAuthor()); //Output: Title: The C Programming, Author: Dennis Ritchie

// update year

book.updateYear = function(year) {
    this.year = year;
}

book.updateYear(1980);

console.log(book); 

/*
    Output:

    {
    title: 'The C Programming',
    author: 'Dennis Ritchie',
    year: 1980,
    titleAndAuthor: [Function (anonymous)],
    updateYear: [Function (anonymous)]
    }
*/