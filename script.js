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
// const cards = document.querySelectorAll('.card');

openAddBook.addEventListener('click', () => {
  openModal(modal);
  form.reset();
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
  showBooks();

  console.log(newBook, newTitle, newAuthor, newPages, newRead, myLibrary);
});

function showBooks() {
  const display = document.querySelector('.card-grid');
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => display.removeChild(card));
  for (let i = 0; i < myLibrary.length; i++) {
    addCard(myLibrary[i]);
  }
}

function addCard(item) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  cardGrid.appendChild(newCard);

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = `${item.title}`;
  cardTitle.style.fontStyle = 'italic';
  newCard.appendChild(cardTitle);

  const cardAuthor = document.createElement('h3');
  cardAuthor.textContent = `${item.author}`;
  newCard.appendChild(cardAuthor);

  const cardPages = document.createElement('h3');
  cardPages.textContent = `${item.pages} pages`;
  newCard.appendChild(cardPages);

  const cardRead = document.createElement('button');
  if (item.read) {
    cardRead.textContent = 'Read';
    cardRead.classList.add('read');
  } else if (!item.read) {
    cardRead.textContent = 'Not Read';
    cardRead.classList.add('not-read');
  }
  newCard.appendChild(cardRead);
}

function addRemoveButton() {
  remove = document.createElement('button');
  remove.textContent = 'Remove';
  remove.classList.add('remove-btn');
  newCard.appendChild(remove);
}

cardGrid.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    newCard.remove();
  }
});
