// nested objects

function Book(title, author, year) {
    this.title = title,
    this.author = author,
    this.year = year
}


const library = {
    name: "The Central Library",
    books: [
        new Book("Pride and Prejudice", "Jane Austen", 1813),
        new Book("To Kill a Mockingbird", "Harper Lee", 1960),
        new Book("One Hundread Years of Solitude", "Gabriel Garcia Marquez", 1967),
        new Book("The Lord of The Rings", "J.R.R. Tolkein", 1955),
        new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 1979)
    ]
};

console.log(library);

/*
    Output:

    {
  name: 'The Central Library',
  books: [
    Book {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813
    },
    Book {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    },
    Book {
      title: 'One Hundread Years of Solitude',
      author: 'Gabriel Garcia Marquez',
      year: 1967
    },
    Book {
      title: 'The Lord of The Rings',
      author: 'J.R.R. Tolkein',
      year: 1955
    },
    Book {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
      year: 1979
    }
  ]
}
*/


// access name of the library and title of all the books

console.log(`Name of the library: ${library.name}`);
console.log("Title of the books: ");
for(let i = 0; i < 5; i++) {
    console.log(library.books[i].title);
}

/*
    Output:

    Name of the library: The Central Library
    Title of the books: 
    Pride and Prejudice
    To Kill a Mockingbird
    One Hundread Years of Solitude
    The Lord of The Rings
    The Hitchhiker's Guide to the Galaxy
*/