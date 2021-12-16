const addBtn = document.querySelector("#addBtn");
const formSubmit = document.querySelector(".form-container");

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
