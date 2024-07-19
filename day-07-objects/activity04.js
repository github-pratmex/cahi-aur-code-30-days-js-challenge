const book = {
    title: "My Journey to America",
    year: 1990
};

book.titleAndYear = function() {
    return `Title: ${this.title}, Year: ${this.year}`;
}

console.log(book.titleAndYear()); // Output: Title: My Journey to America, Year: 1990