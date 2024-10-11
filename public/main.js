

function viewBooks() {
    fetch('/view-books')
        .then(response => response.json())
        .then(data => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '<h2>Books List</h2>';
            data.forEach(book => {
                contentDiv.innerHTML += `<p>${book.title} by ${book.author}</p>`;
            });
        })
        .catch(error => console.error('Error fetching books:', error));
}

function handleFormSubmit(event) {
    event.preventDefault(); 

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (title && author) {
        fetch('/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, author }),
        })
        .then(response => response.json())
        .then(data => {
            alert(`Book "${data.title}" added successfully!`);
            viewBooks(); 
            document.getElementById('add-book-form').reset(); 
        })
        .catch(error => console.error('Error adding book:', error));
    }
}
    