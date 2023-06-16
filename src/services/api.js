// src/services/api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://127.0.0.1:8000/library/', // our Django REST API url
  headers: {
    'Content-Type': 'application/json',
  },
});
