import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/BookService';

const BookList = () => {
    const [books, setBooks] = useState([]);  // for storing books

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getBooks();
                setBooks(response.data);
            } catch (err) {
                console.error('Failed to fetch books: ', err);
            }
        };

        fetchBooks();
    }, []); // empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            <h1>Book List</h1>
            {books.map((book) => (
                <div key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.genre}</p>
                    {/* Display other book properties as needed */}
                </div>
            ))}
        </div>
    );
};

export default BookList;
