// src/api/axios.js
import axios from 'axios';

// Change baseURL to wherever your backend is running
export default axios.create({
  baseURL: 'https://yellowdots-backend.onrender.com/api',
});
