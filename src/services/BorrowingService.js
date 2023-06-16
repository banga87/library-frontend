import api from './api';

export const getBorrowings = ()=> {
  return api.get('borrowings/');
};

export const getBorrowingsByStudent = (studentId) => {
  return api.get(`students/${studentId}/borrowings/`);
}
