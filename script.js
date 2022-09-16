'use strict';

const openAddBook = document.getElementById('add-btn');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const form = document.getElementById('new-book-form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

openAddBook.addEventListener('click', () => {
  openModal(modal);
});

overlay.addEventListener('click', () => {
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? 'already read' : 'not read yet'
    }`;
  };
}

// function addBookToLibrary() {
//   // let newTitle = title.value;
//   // let newAuthor = author.value;
//   // let newPages = pages.value;
//   // let newRead = read.checked;
//   let newBook = new Book(title, author, pages, read);
//   myLibrary.push(newBook);
// }

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let newTitle = event.currentTarget.title.value;
  let newAuthor = event.currentTarget.author.value;
  let newPages = event.currentTarget.pages.value;
  let newRead = event.currentTarget.read.checked;
  let newBook = new Book(newTitle, newAuthor, newPages, newRead);
  myLibrary.push(newBook);
  closeModal(modal);
  console.log(newBook, newTitle, newAuthor, newPages, newRead, myLibrary);
});

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);

// console.log(theHobbit.info());
