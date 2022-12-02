
const fetchAuthors = new Promise((resolve, reject) => {
  resolve(['author1', 'author2', 'author3']);
})
const fetchSomethingElse = new Promise((resolve, reject) => {
  resolve(['author1', 'author2', 'author3']);
})

const fetchBooks = new Promise((resolve, reject) => {
  const books = getBooksByAuthors(authors);
  if (books) {
    resolve(books);
  } else {
    reject('No books finded');
  }
})

fetchAuthors.then((authors) => {
  const books = getBooksByAuthors(authors);
  return books
})
.then((books) => {
  //handle books
  return books;
})
.catch(error => {
  console.log(error);
})

async function functionToDoSomethingAsync() {
  try {
    const authors = await fetchAuthor;
    const somethingElse = await fetchSomethingElse;

  } catch(error) {
    console.log(error);
  }
}


function getBooksByAuthors(authors) {
    // request books by authors
    return ['book 1', 'book 2', 'book 3']
}