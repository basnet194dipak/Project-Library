const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read = true) {
    if (typeof pages !== "number" || Number.isNaN(pages)) {
        throw new TypeError("Pages must be a valid number");
    }

    if (typeof read !== "boolean") {
        throw new TypeError("read must be a valid number")
    }

    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

addBookToLibrary("Think Fast and Slow", "J.R.R. Tolkien", 310, true);
addBookToLibrary("You can Win", "J.R.R. Tolkien", 320, false);
addBookToLibrary("Think and Grow Rich", "J.R.R. Tolkien", 330, true);
addBookToLibrary("How to influence people and win friends", "J.R.R. Tolkien", 310, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);

// loop through the mylibrary
document.addEventListener("DOMContentLoaded", function () {
    let library = document.querySelector(".library")
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        let display_book = document.createElement("div")
        if (book.read == true) {
            read = "read"
        }
        else {
            read = "not read"
        }
        display_book.setAttribute("class", "book")
        display_book.innerText = `id:${book["id"]}
                                title:${book["title"]}
                                author:${book["author"]}
                                pages:${book["pages"]}
                                read:${read}`

        library.appendChild(display_book)
    }
})
