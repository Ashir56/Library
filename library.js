function addBook() {
  const bookName = document.getElementById('bookName').value;
  const authorName = document.getElementById('authorName').value;

  if (bookName && authorName) {
    const book = {
      title: bookName,
      author: authorName
    };

    const library = JSON.parse(localStorage.getItem('library')) || [];

    library.push(book);

    localStorage.setItem('library', JSON.stringify(library));

    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';

    displayLibrary();
  } else {
    alert('Please enter both book name and author name.');
  }
}

function deleteBook(title) {
  const library = JSON.parse(localStorage.getItem('library')) || [];

  const bookIndex = library.findIndex((book) => book.title === title);

  if (bookIndex !== -1) {
    library.splice(bookIndex, 1);

    localStorage.setItem('library', JSON.stringify(library));

    displayLibrary();
  }
}

function displayLibrary() {
  const libraryList = document.getElementById('libraryList');
  libraryList.innerHTML = '';

  const library = JSON.parse(localStorage.getItem('library')) || [];

  library.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `<strong>${book.title}</strong> by ${book.author}
          <button onclick="deleteBook('${book.title}')">Delete</button>`;
    libraryList.appendChild(bookElement);
  });
}

displayLibrary();
