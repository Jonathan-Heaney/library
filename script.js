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
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
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
}

let newTitle, newAuthor, newPages, newRead, newBook;

function addBookToLibrary(event) {
  newTitle = event.currentTarget.title.value;
  newAuthor = event.currentTarget.author.value;
  newPages = event.currentTarget.pages.value;
  newRead = event.currentTarget.read.checked;
  newBook = new Book(newTitle, newAuthor, newPages, newRead);
  myLibrary.push(newBook);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  addBookToLibrary(event);
  closeModal(modal);
  console.log(newBook, newTitle, newAuthor, newPages, newRead, myLibrary);
});

function addCard() {}
