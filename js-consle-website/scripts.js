const books = [
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        authorName: "Douglas Adams",
        releaseYear: 1979
    },
    {
        title: "Dune",
        authorName: "Frank Herbert",
        releaseYear: 1965
    },
    {
        title: "1984",
        authorName: "George Orwell",
        releaseYear: 1949
    },
    {
        title: "Brave New World",
        authorName: "Aldous Huxley",
        releaseYear: 1932
    }
];

/**
 * Callback function to sort books by release year.
 * @param {object} bookA - The first book object.
 * @param {object} bookB - The second book object.
 * @returns {number} - -1 if bookA is older, 1 if bookB is older, 0 if years are equal.
 */
function sortByYear(bookA, bookB) {
    if (bookA.releaseYear < bookB.releaseYear) {
        return -1; // bookA comes before bookB
    } else if (bookA.releaseYear > bookB.releaseYear) {
        return 1; // bookA comes after bookB
    } else {
        return 0; // Years are equal, order doesn't matter for sorting
    }
}

// Example of how to use the sort function:
// books.sort(sortByYear);
// console.log(books);

const filteredBooks = books.filter((book) => book.releaseYear >= 1950);
filteredBooks.sort(sortByYear);
console.log(filteredBooks)