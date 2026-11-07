class Book{
  constructor(title, author, pages, read)
  {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

    toggle_read()
    {
      if (this.read === true) 
        {
          this.read = false;
        } 
      else 
        {
          this.read = true;
        }
    }

}

class Library{
  constructor()
  {
    this.myLibrary = []
  }

  addBookToLibrary(title, author, pages, read = true) 
  {
    if (typeof pages !== "number" || Number.isNaN(pages)) {
      throw new TypeError("Pages must be a valid number");
    }

    if (typeof read !== "boolean") {
      throw new TypeError("read must be a valid number");
    }

    let book = new Book(title, author, pages, read);
    this.myLibrary.push(book);
  }

  delete_book(id) 
  {
    for (let i = 0; i < this.myLibrary.length; i++) {
      if (this.myLibrary[i]["id"] == id) {
        this.myLibrary.splice(i, 1);
        return;
      }
    }
  }

}



// add ui
function display_books(book, library) {
  let display_book = document.createElement("div");
  if (book.read == true) {
    read = "read";
  } else {
    read = "not read";
  }
  display_book.setAttribute("class", "book");
  display_book.setAttribute("id", book.id);
  display_book.innerText = `id:${book.id}
                                title:${book.title}
                                author:${book.author}
                                pages:${book.pages}
                                read:${read}`;

  // change the reading status of a book
  let reading = document.createElement("button");
  reading.innerText = "toggle_read";
  reading.setAttribute("class", `toggle_reading`);
  reading.addEventListener("click", () => {
    book.toggle_read();
    // display_book.parentNode.removeChild(display_book)
    if (book.read == true) {
      read = "read";
    } else {
      read = "not read";
    }
    display_book.innerText = `id:${book.id}
                                title:${book.title}
                                author:${book.author}
                                pages:${book.pages}
                                read:${read}`;
    display_book.appendChild(reading);
    display_book.appendChild(delete_books);
  });

  // delete the book
  let delete_books = document.createElement("button");
  delete_books.innerText = "Delete Book";
  delete_books.addEventListener("click", () => {
    new_library.delete_book(book.id);
    console.log(new_library.myLibrary);
    display_book.parentNode.removeChild(display_book);
  });
  display_book.appendChild(reading);
  display_book.appendChild(delete_books);
  library.appendChild(display_book);
}

// loop through the mylibrary
document.addEventListener("DOMContentLoaded", function () {
  let library = document.querySelector(".library");
  for (let i = 0; i < new_library.myLibrary.length; i++) {
    let book = new_library.myLibrary[i];
    display_books(book, library);
  }
});

let add_book = document.querySelector("#add_book");
add_book.addEventListener("click", () => {
  let form = document.querySelector("#forms");
  form.style.visibility = "visible";
  let cancel = document.querySelector("#cancel");
  cancel.addEventListener("click", () => {
    form.style.visibility = "hidden";
    form.reset();
  });
});

// initialize the library

let new_library = new Library
// add book
let fourm = document.querySelector("form");
fourm.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = Number(document.querySelector("#pages").value);
  let read = document.querySelector("#read").checked;

  new_library.addBookToLibrary(title, author, pages, read);
  let library = document.querySelector(".library");

  console.log(new_library.myLibrary)
  // let book = new Book(title,author,pages,read)
  display_books(new_library.myLibrary.at(-1), library);
});
