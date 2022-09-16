'use strict';

const openAddBook = document.getElementById('add-btn');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const form = document.getElementById('new-book-form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const cardGrid = document.querySelector('.card-grid');

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

let newTitle, newAuthor, newPages, newRead, newBook, newCard;
let cardTitle, cardAuthor, cardPages, cardRead, remove;

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
  addCard();
  console.log(newBook, newTitle, newAuthor, newPages, newRead, myLibrary);
});

function addCard() {
  createCard();
  addTitle();
  addAuthor();
  addPages();
}

function createCard() {
  newCard = document.createElement('div');
  newCard.classList.add('card');
  cardGrid.appendChild(newCard);
}

function addTitle() {
  cardTitle = document.createElement('h3');
  cardTitle.textContent = `${newTitle}`;
  cardTitle.style.fontStyle = 'italic';
  newCard.appendChild(cardTitle);
}

function addAuthor() {
  cardAuthor = document.createElement('h3');
  cardAuthor.textContent = `${newAuthor}`;
  newCard.appendChild(cardAuthor);
}

function addPages() {
  cardPages = document.createElement('h3');
  cardPages.textContent = `${newPages} pages`;
  newCard.appendChild(cardPages);
}
