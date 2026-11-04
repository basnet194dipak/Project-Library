# My Library

A simple and interactive library application built using **HTML, CSS, and JavaScript**. This project allows users to add books to their personal library, track their reading status, and remove books when they are no longer needed.

The project focuses on practicing JavaScript objects, constructors, prototypes, DOM manipulation, and event handling.

## Live Preview

[View Live Demo](https://basnet194dipak.github.io/Project-Library/)

## Features

- **Add Books:** Add books by providing their title, author, and page count.
- **Reading Status:** Mark books as read or unread using the toggle button.
- **Delete Books:** Remove books from the library.
- **Dynamic Book Cards:** Display book information dynamically using JavaScript.
- **Form Validation:** Require book details and ensure the page count is a positive number.
- **Unique Book IDs:** Assign a unique ID to each book using `crypto.randomUUID()`.
- **Interactive UI:** Show and hide the book form using the Add Book and Cancel buttons.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM Manipulation
- JavaScript Objects and Prototypes
- Event Listeners

## Project Structure

```text
Project-Library/
├── OIP.jpg
├── README.md
├── index.html
├── index.js
└── style.css
```

| File         | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| `index.html` | Defines the structure of the library application.                                 |
| `style.css`  | Handles the layout, styling, and appearance of the application.                   |
| `index.js`   | Implements book creation, reading status updates, deletion, and DOM interactions. |
| `OIP.jpg`    | Image asset used for the library logo.                                            |
| `README.md`  | Project documentation.                                                            |

## How to Run

1. Clone this repository:

   ```bash
   git clone https://github.com/basnet194dipak/Project-Library.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Project-Library
   ```

3. Open `index.html` in your browser.

## How to Use

1. Open the application in your browser.
2. Click the **Add Book** button.
3. Enter the book's title, author, and number of pages.
4. Select the checkbox if you have already read the book.
5. Click **Submit** to add the book to your library.
6. Use the `toggle_read` button to update its reading status.
7. Click **Delete Book** to remove a book from the library.

## Concepts Practiced

This project helped me practice:

- Creating objects using constructor functions.
- Working with JavaScript prototypes.
- Generating unique identifiers.
- Managing an array of objects.
- Manipulating the DOM dynamically.
- Handling form submissions and user interactions.
- Using event listeners to implement interactive features.
- Validating user input.

## Future Improvements

- Add persistent storage using `localStorage`.
- Improve the responsive layout for mobile devices.
- Add search and filtering functionality.
- Improve the form and book card design.
- Add the ability to edit existing book information.

## Acknowledgment

This project was built as part of my web development learning journey through [The Odin Project](https://www.theodinproject.com/).
