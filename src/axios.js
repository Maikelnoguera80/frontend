// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9090/backend', // URL de la API Laravel
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
