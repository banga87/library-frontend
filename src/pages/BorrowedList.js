import React, { useEffect, useState } from 'react';
import { getBorrowings } from '../services/BorrowingService';

const BorrowedList = () => {
  const [borrowings, setBorrowings] = useState([]);

  useEffect(()=> {
    const fetchBorrowings = async ()=> {
      try {
        const response = await getBorrowings();
        setBorrowings(response.data);
      } catch (err) {
        console.error('Failed to fetch borrowings: ', err)
      }
    };

    fetchBorrowings();
  }, []); // Empty list tells useEffect to run once on component mount.

  return (

    <div>
      <h1>Currently Borrowed Books</h1>
      {borrowings.map((borrowing) => {
        <div key={borrowing.id}>
          <h2>{borrowing.book.title}</h2>
          <p>Borrowed by: {borrowing.student.name}</p>
          <p>Borrowed on: {borrowing.book.borrowed_date}</p>
          <p>Return date: {borrowing.book.return_date}</p>
        </div>
      })}
    </div>
  );
};

export default BorrowedList;