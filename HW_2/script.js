class library {
    #books = [];

    constructor(books) {
        for (let book of books) {
            if (this.#books.includes(book)) throw new Error("Книга уже существует");
            else this.#books.push(book);
        }
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) throw new Error("Такая книга уже существует");
        else this.#books.push(title);
    }

    removeBook(title) {
        if (this.#books.includes(title)) {
            this.#books = this.#books.filter((book) => book !== title)
        } else throw new Error("Такой книги не существует");
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

let lib = new library(["boo", "foo", "noo"]);

console.log(lib.allBooks);
lib.removeBook("foo");
console.log(lib.allBooks);
console.log(lib.hasBook("boo"));
console.log(lib.hasBook("foo"));