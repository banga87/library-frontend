import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBook, borrowBook } from '../services/BookService';

const BookDetail = () => {
  const { id } = useParams();
  const [ book, setBook] = useState(null);

  useEffect(()=> {
    const fetchBook = async () => {
      try {
        const response = await getBook(id);
        setBook(response.data)
      } catch (err) {
        console.error("Failed to fetch book: ", err)
      }
    }

    fetchBook();
  }, [id]);

  const handleBorrow = async () => {
    try {
      await borrowBook(id, 1); // Manually added a studentId = 1
      alert('Borrowed Successfully!');
    } catch (err) {
      console.error('Failed to borrow book: ', err);
    }
  };

  if (!book) {
    return <div>Loading...</div>
  }

  return (

    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <button onClick={handleBorrow}>Borrow</button>
    </div>

  )
}

export default BookDetail;