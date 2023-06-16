import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Books() {
  
  const [books, setBooks] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:8000/library/books/')
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []); // Empty array will have this effect run once when the component mounts.

  return (
    <div>
      <h2>Books</h2>
      {books.map(book => {
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>{book.is_borrowed ? 'Borrowed' : 'Available'}</p>
        </div>
      })}
    </div>
  )
}

export default Books;