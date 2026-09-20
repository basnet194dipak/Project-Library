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

// toogle read
Book.prototype.toggle_read = function () {
    if (this.read === true) {
        this.read = false;
    }
    else {
        this.read = true;
    }
}

// delete book
function delete_book(id) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i]["id"] == id) {
            myLibrary.splice(i, 1)
        }
    }
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

// 

addBookToLibrary("Think Fast and Slow", "J.R.R. Tolkien", 310, true);
addBookToLibrary("You can Win", "J.R.R. Tolkien", 320, false);
addBookToLibrary("Think and Grow Rich", "J.R.R. Tolkien", 330, true);
addBookToLibrary("How to influence people and win friends", "J.R.R. Tolkien", 310, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);


// add ui 
function display_books(book, library) {
    let display_book = document.createElement("div")
    if (book.read == true) {
        read = "read"
    }
    else {
        read = "not read"
    }
    display_book.setAttribute("class", "book")
    display_book.setAttribute("id", book["id"])
    display_book.innerText = `id:${book["id"]}
                                title:${book["title"]}
                                author:${book["author"]}
                                pages:${book["pages"]}
                                read:${read}`

    // change the reading status of a book
    let reading = document.createElement("button")
    reading.innerText = "toggle_read"
    reading.setAttribute("class", `toggle_reading`)
    reading.addEventListener("click", () => {
        book.toggle_read()
        // display_book.parentNode.removeChild(display_book)
        if (book.read == true) {
            read = "read"
        }
        else {
            read = "not read"
        }
        display_book.innerText = `id:${book["id"]}
                                title:${book["title"]}
                                author:${book["author"]}
                                pages:${book["pages"]}
                                read:${read}`
        display_book.appendChild(reading)
        display_book.appendChild(delete_books)
    })

    // delete the book
    let delete_books = document.createElement("button")
    delete_books.innerText = "Delete Book"
    delete_books.addEventListener("click", () => {
        delete_book(book["id"])
        console.log(myLibrary)
        display_book.parentNode.removeChild(display_book)
    })
    display_book.appendChild(reading)
    display_book.appendChild(delete_books)
    library.appendChild(display_book)
}

// loop through the mylibrary
document.addEventListener("DOMContentLoaded", function () {
    let library = document.querySelector(".library")
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        display_books(book, library)
    }
})


let add_book = document.querySelector("#add_book")
add_book.addEventListener("click", () => {
    let form = document.querySelector("#forms")
    form.style.visibility = "visible"
    let cancel = document.querySelector("#cancel")
    cancel.addEventListener("click", () => {
        form.style.visibility = 'hidden'
    })
})