// src/services/BookService.js
import api from './api';

export const getBooks = () => {
  return api.get('books/');
};

export const getBook = (bookId) => {
  return api.get(`books/${bookId}`)
};

export const borrowBook = (bookId, studentId) => {
  return api.post(`books/${bookId}/borrow/`, {student_id: studentId});
}
