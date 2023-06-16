import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBorrowingsByStudent } from '../services/BorrowingService';

const StudentBorrowList = () => {
  const { id } = useParams();
  const [ borrowings, setBorrowings ] = useState([]);

  useEffect(() => {
    const fetchBorrowings = async () => {
      try {
        const response = await getBorrowingsByStudent(id);
        setBorrowings(response.data);
      } catch (err) {
        console.error("Failed to fetch borrowings: ", err);
      }
    }

    fetchBorrowings();
  }, [id]); // id is the dependancy which dictates when useEffect will execute.

  return (

    <div>
      <h1>My Borrowed Books</h1>
      {borrowings.map((borrowing) => {
        <div key={borrowing.id}>
          <h2>{borrowing.book.title}</h2>
          <p>Return Date: {borrowing.book.return_date}</p>
        </div>
      })}
    </div>

  )
};

export default StudentBorrowList;