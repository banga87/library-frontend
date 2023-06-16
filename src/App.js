import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './pages/BookList';
import BorrowedList from './pages/BorrowedList';
import StudentBorrowList from './pages/StudentBorrowList';
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/borrowings" element={<BorrowedList />} />
        <Route path="/students/:id/borrowings" element={<StudentBorrowList />} />
        /* Add more routes as you create the other pages */
      </Routes>
    </Router>
  );
}

export default App;
