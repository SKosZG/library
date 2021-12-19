const addBtn = document.querySelector("#addBtn");
const formSubmit = document.querySelector(".form-container");
const main = document.querySelector("main");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  addBook(title, author, pages, read);
}

Book.prototype.bookInfo = function () {
  return this.title;
};

addBookToLibrary("The Hobit", "J.R.R. Tolkien", "295", "not read");
addBookToLibrary("The Hobit2", "J.R.R. Tolkien", "395", "not read");
addBookToLibrary("The Hobit3", "J.R.R. Tolkien", "495", "not read");

const readList = () => {
  for (e in myLibrary) {
    console.log(
      `${myLibrary[e].title}, ${myLibrary[e].author}, ${myLibrary[e].pages}, ${myLibrary[e].read}`
    );
  }
};

readList();

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// addBtn.addEventListener("click", () => {
//   let title = document.querySelector("#title").value;
//   let author = document.querySelector("#author").value;
//   let pages = document.querySelector("#pages").value;
//   let read = document.querySelector("#read").value;

//   addBookToLibrary(title, author, pages, read);
//   console.log(title);
// });

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;

  addBookToLibrary(title, author, pages, read);
  formSubmit.reset();
  // const formData = new FormData(event.target);
  // const formProps = Object.fromEntries(formData);
  // const formula = formData.get("title");
  // let title = document.querySelector(".title").value;
  // console.log(title);
});

function addBook(title, author, pages, read) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("container");
  const newTitleP = document.createElement("p");
  newTitleP.classList.add("title", "book-info");
  newTitleP.textContent = title;
  const newAuthorP = document.createElement("p");
  newAuthorP.classList.add("author", "book-info");
  newAuthorP.textContent = author;
  const newPagesP = document.createElement("p");
  newPagesP.classList.add("pages", "book-info");
  newPagesP.textContent = pages;
  const newReadP = document.createElement("p");
  newReadP.classList.add("read", "book-info");
  newReadP.textContent = read;

  newDiv.appendChild(newTitleP);
  newDiv.appendChild(newAuthorP);
  newDiv.appendChild(newPagesP);
  newDiv.appendChild(newReadP);

  main.appendChild(newDiv);
}

addBook("test title", "test author", "2", "read");
